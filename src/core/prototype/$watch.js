import isPlainObject from "../../shared/util/isPlainObject";
import emptyObject from "../../shared/const/emptyObject";
import isString from "../../shared/util/isString";
import parsePath from "../../static/define/util/parsePath";
import isFunction from "../../shared/util/isFunction";
import Computed from "../../static/observable/computed";
import uid from "../../shared/util/uid";
import isNotEqual from "../../shared/util/isNotEqual";


/**
 * 存放每个实例的 watch 数据
 */
export const watcherMap = new WeakMap();


/**
 * 监听 Hu 实例对象和观察者对象
 */
export default function $watch( expOrFn, callback, options ){
  // 传入对象的写法
  if( isPlainObject( callback ) ){
    return $watch.call( this, expOrFn, callback.handler, callback );
  }

  const self = this || emptyObject;
  let computedInstance, computedInstanceTarget, computedInstanceTargetProxyInterceptor;
  let watchFn;

  if( !( watchFn = parseExpOrFn( expOrFn, self ) ) ){
    return;
  }

  // 尝试读取当前实例 watch 相关数据
  if( watcherMap.has( self ) ){
    computedInstance = watcherMap.get( self );
  }
  // 存储当前实例 watch 相关数据
  else{
    watcherMap.set(
      self,
      computedInstance = new Computed( self, true )
    );
  }

  options = options || {};
  computedInstanceTarget = computedInstance.target;
  computedInstanceTargetProxyInterceptor = computedInstance.targetProxyInterceptor;

  /** 当前 watch 的存储名称 */
  const name = uid();
  /** 是否监听对象内部值的变化 */
  const deep = !!options.deep;
  /** 是否立即执行回调 */
  let immediate;
  /** 值改变是否执行回调 */
  let runCallback = immediate = !!options.immediate;

  // 添加监听
  computedInstance.add(
    name,
    {
      get(){
        const oldValue = computedInstanceTarget[ name ];
        const value = watchFn();

        if( runCallback ){
          //   首次运行             值不一样      值一样的话, 判断是否是深度监听
          if( immediate || isNotEqual( value, oldValue ) || deep ){
            callback.call( self, value, oldValue );
          }
        }

        return value;
      }
    },
    deep
  );

  // 首次运行, 以收集依赖
  computedInstanceTargetProxyInterceptor[ name ];
  // 下次值改变时运行回调
  runCallback = true;
  immediate = false;

  // 返回取消监听的方法
  return () => {
    computedInstance.delete( name );
  };
}

/**
 * 解析 $watch 首个参数
 */
function parseExpOrFn( expOrFn, self ){
  // 使用键路径表达式
  if( isString( expOrFn ) ){
    return parsePath( expOrFn ).bind( self );
  }
  // 使用计算属性函数
  else if( isFunction( expOrFn ) ){
    return expOrFn.bind( self );
  }
  // 不支持其他写法
  return;
}