import initProps from "./initProps";
import initMethods from "./initMethods";
import initData from "./initData";
import initComputed from "./initComputed";
import initWatch from "./initWatch";
import initRootTarget from "./initRootTarget";
import initPrototype from "./initPrototype";
import initOptions from "./initOptions";


/**
 * 初始化当前组件属性
 * @param {HTMLElement} root 自定义元素组件节点
 * @param {{}} options 组件配置
 */
export default function init( root, options, userOptions ){
  
  const [
    target,
    targetProxy
  ] = initRootTarget();

  target.$el = root.attachShadow({ mode: 'open' });
  target.$customElement = root;

  initPrototype( root, options, target, targetProxy );
  initOptions( root, options, target, targetProxy, userOptions );

  initProps( root, options, target, targetProxy );
  initMethods( root, options, target, targetProxy );
  initData( root, options, target, targetProxy );

  options.beforeCreate.call( targetProxy );

  initComputed( root, options, target, targetProxy );
  initWatch( root, options, target, targetProxy );

  options.created.call( targetProxy );

  return targetProxy;
}