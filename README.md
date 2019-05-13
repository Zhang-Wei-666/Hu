# Hu
Hu 是一个基于 Web Components 和 Proxy 的 MVVM 框架, 适合公用组件开发<br>
Hu 使用了和 Vue 相似的 API, 大大减少了学习成本

<br>

## 浏览器支持

|              | Chrome | Firefox | Safari | Edge | IE | UC    |
| :-           | :-     | :-      | :-     | :-   | :- | :-    |
| Use Polyfill | 49+    | 47+     | 10+    | 14+  | ×  | 11.8+ |
| No Polyfill  | 54+    | 63+     | 10.1+  | 75+  | ×  | 11.8+ |

> 在目前支持的这些浏览器下, 已经支持大部分的 ES5 / ES6 等特性及方法了,<br>
> 在项目中就可以忽略对这些特性的 babel 转码和 polyfill 以达到更好的性能, 特在此罗列出来 ( 包括但不限于 ): <br>
  > - [箭头函数表达式 ( Arrow Functions )](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
  > - [函数默认参数 ( Default parameters )](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)
  > - [剩余参数 ( Rest Parameters )](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)
  > - [模板字面量 ( Template literals ) or 模板字符串 ( Template Strings )](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings)
  > - [计算属性名 ( Computed property names )](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#计算属性名) / [简短属性名 ( Shorthand property names )](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#属性定义) / [简短方法名 ( Shorthand method names )](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#方法定义)
  > - [展开语法 ( Spread syntax )](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
  > - [解构赋值 ( Destructuring assignment )](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  > - [类 ( Classes )](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)
  > - [迭代循环 ( for...of )](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)
  > - [块级作用域 - 常量 ( Const )](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const) / [块级作用域 - 变量 ( Let )](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let)

<br>

## 大小 - 版本详解
| Description | UMD | CommonJS | ES Module |
| :- | :- | :- | :- |
| 正常版 | **hu.js**<br>*102.19KB / 26.19KB* | **hu.common.js**<br>*95.33KB / 25.70KB* | **hu.esm.js**<br>*95.31KB / 25.69KB* |
| 正常版 ( 生产环境 ) | **hu.min.js**<br>*26.53KB / 10.31KB* | **hu.common.min.js**<br>*33.94KB / 11.32KB* | **hu.esm.min.js**<br>*26.36KB / 10.24KB* |
| 正常版 + Polyfill | **hu.polyfill.js**<br>*210.36KB / 58.26KB* | **hu.polyfill.common.js**<br>*202.99KB / 57.68KB* | **hu.polyfill.esm.js**<br>*202.98KB / 57.67KB* |
| 正常版 + Polyfill ( 生产环境 ) | **hu.polyfill.min.js**<br>*126.34KB / 40.46KB* | **hu.polyfill.common.min.js**<br>*133.75KB / 41.49KB* | **hu.polyfill.esm.min.js**<br>*126.17KB / 40.39KB* |
| 正常版 + Polyfill ( 按需加载 ) | **hu.polyfill.async.js**<br>*108.88KB / 28.19KB* | **hu.polyfill.async.common.js**<br>*101.67KB / 27.68KB* | **hu.polyfill.async.esm.js**<br>*101.65KB / 27.66KB* |
| 正常版 + Polyfill ( 按需加载 ) ( 生产环境 ) | **hu.polyfill.async.min.js**<br>*28.86KB / 11.09KB* | **hu.polyfill.async.common.min.js**<br>*36.27KB / 12.08KB* | **hu.polyfill.async.esm.min.js**<br>*28.69KB / 11.02KB* |

<br>

## Include
  - [Lit-HTML](https://github.com/Polymer/lit-html) \- [LICENSE](https://github.com/Polymer/lit-html/blob/master/LICENSE)