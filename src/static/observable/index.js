import { targetStack } from "./const";
import isEqual from "../../shared/util/isEqual";
import { create } from "../../shared/global/Object/index";
import { getOwnPropertyDescriptor, deleteProperty, ownKeys, has } from "../../shared/global/Reflect/index";
import emptyObject from "../../shared/const/emptyObject";
import isFunction from "../../shared/util/isFunction";
import { hasOwnProperty } from "../../shared/global/Object/prototype";
import isPlainObject from "../../shared/util/isPlainObject";
import { isArray } from "../../shared/global/Array/index";


/**
 * 存放原始对象和观察者对象及其选项参数的映射
 */
export const observeMap = new WeakMap();

/**
 * 存放观察者对象和观察者对象选项参数的映射
 */
export const observeProxyMap = new WeakMap();

/**
 * 创建无参数观察对象
 */
export function observable( obj ){
  return isPlainObject( obj ) || isArray( obj ) ? observe( obj )
                                                : obj;
}

/**
 * 为传入对象创建观察者
 */
export function observe( target, options ){
  // 如果创建过观察者
  // 则返回之前创建的观察者
  if( observeMap.has( target ) ) return observeMap.get( target ).proxy;
  // 如果传入的就是观察者对象
  // 则直接返回
  if( observeProxyMap.has( target ) ) return target;
  // 否则立即创建观察者进行返回
  return createObserver( target, options );
}

function createObserver(
  target,
  options = {}
){
  /** 当前对象的观察者对象 */
  const proxy = new Proxy( target, {
    get: createObserverProxyGetter( options.get ),
    set: createObserverProxySetter( options.set ),
    ownKeys: observerProxyOwnKeys,
    deleteProperty: createObserverProxyDeleteProperty( options.deleteProperty )
  });

  /** 观察者对象选项参数 */
  const observeOptions = {
    // 可以使用观察者对象来获取原始对象
    target,
    // 可以使用原始对象来获取观察者对象
    proxy,
    // 当前对象的子级的被监听数据
    watchers: create( null ),
    // 当前对象的被深度监听数据
    deepWatchers: new Set(),
    // 上次的值
    lastValue: create( null )
  };

  // 存储观察者选项参数
  observeMap.set( target, observeOptions );
  observeProxyMap.set( proxy, observeOptions );

  return proxy;
}

/**
 * 创建依赖收集的响应方法
 */
const createObserverProxyGetter = ({ before } = emptyObject) => ( target, name, targetProxy ) => {

  // @return 0: 从原始对象放行
  if( before ){
    const beforeResult = before( target, name, targetProxy );

    if( beforeResult === 0 ){
      return target[ name ];
    }
  }

  // 需要获取的值是使用 Object.defineProperty 定义的属性
  if( ( getOwnPropertyDescriptor( target, name ) || emptyObject ).get ){
    return target[ name ];
  }

  // 获取当前值
  const value = target[ name ];

  // 如果获取的是原型上的方法
  if( isFunction( value ) && !hasOwnProperty.call( target, name ) && has( target, name ) ){
    return value;
  }

  // 获取当前在收集依赖的那个方法的参数
  const watcher = targetStack[ targetStack.length - 1 ];

  // 观察者选项参数
  const observeOptions = observeMap.get( target );

  // 当前有正在收集依赖的方法
  if( watcher ){
    const { watchers } = observeOptions;
    let watch = watchers[ name ];

    // 当前参数没有被监听过, 初始化监听数组
    if( !watch ){
      watch = new Set();
      watchers[ name ] = watch;
    }

    // 添加依赖方法信息到 watch
    // 当前值被改变时, 会调用依赖方法
    watch.add( watcher );
    // 添加 watch 的信息到依赖收集去
    // 当依赖方法被重新调用, 会移除依赖
    watcher.deps.add( watch );
  }

  // 存储本次值
  observeOptions.lastValue[ name ] = value;

  // 如果获取的值是对象类型
  // 则返回它的观察者对象
  return observable( value );
};

/**
 * 创建响应更新方法
 */
const createObserverProxySetter = ({ before } = emptyObject) => ( target, name, value, targetProxy ) => {

  // @return 0: 阻止设置值
  if( before ){
    const beforeResult = before( target, name, value, targetProxy );

    if( beforeResult === 0 ){
      return false;
    }
  }

  // 需要修改的值是使用 Object.defineProperty 定义的属性
  if( ( getOwnPropertyDescriptor( target, name ) || emptyObject ).set ){
    target[ name ] = value;
    return true;
  }

  // 观察者选项参数
  const observeOptions = observeMap.get( target );
  // 旧值集合
  const lastValue = observeOptions.lastValue;
  // 旧值
  const oldValue = name in lastValue ? lastValue[ name ]
                                     : target[ name ];

  // 值完全相等, 不进行修改
  if( isEqual( oldValue, value ) ){
    return true;
  }

  // 改变值
  target[ name ] = lastValue[ name ] = value;

  // 获取子级监听数据
  const { watchers, deepWatchers } = observeOptions;
  // 获取当前参数的被监听数据和父级对象深度监听数据的集合
  let allWatchers = [
    ...( watchers[ name ] || [] ),
    ...deepWatchers
  ];

  // 如果有方法依赖于当前值, 则运行那个方法以达到更新的目的
  if( allWatchers.length ){
    let executes = [];

    for( let watcher of allWatchers ){
      // 通知所有依赖于此值的计算属性, 下次被访问时要更新值
      if( watcher.isComputed ){
        watcher.shouldUpdate = true;

        // 需要更新有依赖的计算属性
        if( !watcher.lazy ){
          executes.push( watcher );
        }
      }
      // 其它需要更新的依赖
      else{
        executes.push( watcher );
      }
    }

    for( let watcher of executes ){
      //           不是计算属性                      需要更新的计算属性
      if( !watcher.isComputed || watcher.shouldUpdate ){
        watcher.update();
      }
    }
  }

  return true;
};

/**
 * 响应以下方式的依赖收集:
 *   - for ... in
 *   - Object.keys
 *   - Object.values
 *   - Object.entries
 *   - Object.getOwnPropertyNames
 *   - Object.getOwnPropertySymbols
 *   - Reflect.ownKeys
 */
const observerProxyOwnKeys = ( target ) => {

  // 获取当前在收集依赖的那个方法的参数
  const watcher = targetStack[ targetStack.length - 1 ];

  // 当前有正在收集依赖的方法
  if( watcher ){
    // 深度监听数据
    const { deepWatchers } = observeMap.get( target );
    // 标识深度监听
    deepWatchers.add( watcher );
  }

  return ownKeys( target );
}

/**
 * 创建响应从观察者对象删除值的方法
 */
const createObserverProxyDeleteProperty = ({ before } = emptyObject) => ( target, name ) => {

  // @return 0: 禁止删除
  if( before ){
    const beforeResult = before( target, name );

    if( beforeResult === 0 ){
      return false;
    }
  }

  return deleteProperty( target, name );
}