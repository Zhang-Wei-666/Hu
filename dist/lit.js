(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Lit = factory());
}(this, function () { 'use strict';

  function Lit() {}

  if (typeof window !== 'undefined') {
    window.Lit = Lit;
  }

  const isArray = Array.isArray;

  var isPlainObject = (
  /**
   * 判断传入对象是否是纯粹的对象
   * @param {any} value 需要判断的对象
   */
  value => Object.prototype.toString.call(value) === '[object Object]');

  var each = (
  /**
   * 对象遍历方法
   * @param {{}} obj 需要遍历的对象
   * @param {( key:string, value: any ) => {}} cb 遍历对象的方法
   */
  (obj, cb) => {
    const keys = Reflect.ownKeys(obj);

    for (let key of keys) {
      cb(key, obj[key]);
    }
  });

  var isFunction = (
  /**
   * 判断传入对象是否是 Function 类型
   * @param {any} value 需要判断的对象
   */
  value => typeof value === 'function');

  var fromBooleanAttribute = (
  /**
   * 序列化为 Boolean 属性
   */
  value => value !== null);

  var isObject = (
  /**
   * 判断传入对象是否是 Object 类型且不为 null
   * @param {any} value 需要判断的对象
   */
  value => value !== null && typeof value === 'object');

  var rHyphenate = /\B([A-Z])/g;

  var isSymbol = (
  /**
   * 判断传入对象是否是 Symbol 类型
   * @param {any} value 需要判断的对象
   */
  value => typeof value === 'symbol');

  /**
   * 初始化组件 props 配置
   * @param {{}} userOptions 用户传入的组件配置
   * @param {{}} options 格式化后的组件配置
   */

  function initProps(userOptions, options) {
    /** 格式化后的 props 配置 */
    const props = options.props = {};
    /** 用户传入的 props 配置 */

    const userProps = userOptions.props;
    /** 用户传入的 props 配置是否是数组 */

    let propsIsArray = false; // 去除不合法参数

    if (userProps == null || !((propsIsArray = isArray(userProps)) || isPlainObject(userProps))) {
      return;
    } // 格式化数组参数


    if (propsIsArray) {
      if (!userProps.length) return;

      for (let name of userProps) {
        props[name] = initProp(name, null);
      }
    } // 格式化 JSON 参数
    else {
        each(userProps, (name, prop) => {
          props[name] = initProp(name, prop);
        });
      }
  }
  /**
   * 格式化组件 prop 配置
   * @param { string | symbol } name prop 名称
   * @param { {} | null } prop 用户传入的 prop
   */

  function initProp(name, prop) {
    /** 格式化后的 props 配置 */
    const options = {};
    initPropAttribute(name, prop, options);

    if (prop) {
      // 单纯设置变量类型
      if (isFunction(prop)) {
        options.from = prop;
      } // 高级用法
      else {
          initPropType(prop, options);
          initPropDefault(prop, options);
        }
    } // 如果传入值是 Boolean 类型, 则需要另外处理


    if (options.from === Boolean) {
      options.from = fromBooleanAttribute;
    }

    return options;
  }
  /**
   * 初始化 options.attr
   */


  function initPropAttribute(name, prop, options) {
    options.attr = // 定义了 attr 名称则使用定义的 attr 名称
    prop && prop.attr ? props.attr // 没有定义 attr 名称且是 symbol 类型的 attr 名称, 则不设置 attr 名称
    : isSymbol(name) ? null // 驼峰转为以连字符号连接的小写 attr 名称
    : name.replace(rHyphenate, '-$1').toLowerCase();
  }
  /**
   * 初始化 options.type 变量类型
   */


  function initPropType(prop, options) {
    const type = prop.type;

    if (type != null) {
      // String || Number || Boolean || function( value ){ return value };
      if (isFunction(type)) {
        options.from = type;
      } // {
      //   from(){}
      //   to(){}
      // }
      else if (isPlainObject(type)) {
          if (isFunction(type.from)) options.from = type.from;
          if (isFunction(type.to)) options.to = type.to;
        }
    }
  }
  /**
   * 初始化 options.default 默认值
   */


  function initPropDefault(prop, options) {
    if ('default' in prop) {
      const $default = prop.default;

      if (isFunction($default) || !isObject($default)) {
        options.default = $default;
      }
    }
  }

  /**
   * 初始化组件配置
   * @param {{}} userOptions 用户传入的组件配置
   */

  function initOptions(userOptions) {
    /** 格式化后的组件配置 */
    const options = {};
    initProps(userOptions, options);
    return options;
  }

  const create = Object.create;

  var returnArg = (
  /**
   * 返回传入的首个参数
   * @param {any} value 需要返回的参数
   */
  value => value);

  var isReserved = (
  /**
   * 判断字符串首字母是否为 $
   * @param {String} value
   */
  value => {
    const charCode = (value + '').charCodeAt(0);
    return charCode === 0x24;
  });

  const defineProperty = Object.defineProperty;

  /**
   * 初始化当前组件 props 属性
   * @param {HTMLElement} root 
   * @param {{}} options 
   * @param {{}} target 
   */

  function initProps$1(root, options, target, targetProxy) {
    const props = options.props;
    const propsTarget = create(null);
    const propsTargetProxy = target.$props = new Proxy(propsTarget, {
      set(target, name, value) {
        if (name in target) target[name] = value;
      }

    }); // 尝试从标签上获取 props 属性, 否则取默认值

    each(props, (name, options) => {
      let value = null;

      if (!isSymbol(name)) {
        value = root.getAttribute(options.attr);
      } // 定义了该属性


      if (value !== null) {
        propsTarget[name] = (options.from || returnArg)(value);
      } // 使用默认值
      else {
          propsTarget[name] = isFunction(options.default) ? options.default.call(targetProxy) : options.default;
        }
    }); // 将 $props 上的属性在 $lit 上建立引用

    each(props, name => {
      if (!(isSymbol(name) || !isReserved(name))) return;
      defineProperty(target, name, {
        enumerable: true,
        configurable: true,
        get: () => propsTargetProxy[name],
        set: value => propsTargetProxy[name] = value
      });
    });
  }

  /**
   * 初始化当前组件属性
   * @param {HTMLElement} root 组件根节点
   * @param {{}} options 组件配置
   */

  function init(root, options) {
    /** 当前组件对象 */
    const target = create(null);
    /** 当前组件代理对象 */

    const targetProxy = new Proxy(target, {
      set(target, name, value) {
        if (name[0] === '$') return false;
        target[name] = value;
        return true;
      }

    });
    target.$el = root.attachShadow({
      mode: 'open'
    });
    target.$root = root;
    initProps$1(root, options, target, targetProxy);
    return targetProxy;
  }

  /**
   * 定义自定义标签
   * @param {string} name 标签名
   * @param {{}} options 组件配置
   */

  function define(name, options) {
    // 初始化组件配置
    options = initOptions(options); // 创建组件

    const LitElement = class LitElement extends HTMLElement {
      constructor() {
        super();
        this.$lit = init(this, options);
      }

      attributeChangedCallback(name, value, oldValue) {}

      connectedCallback() {
        console.log('connectedCallback');
      }

      disconnectedCallback() {
        console.log('disconnectedCallback');
      }

      adoptedCallback() {
        console.log('adoptedCallback');
      }

    }; // 注册组件

    customElements.define(name, LitElement);
  }
  Lit.define = define;

  return Lit;

}));
