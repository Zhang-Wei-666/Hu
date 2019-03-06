const path = require('path');
const fs = require('fs-extra');


const package = require('./package.json');
const READMEPATH = path.resolve( __dirname, 'README.md' );
const REPLACE_PRODUCTION = {
  'process.env.NODE_ENV': JSON.stringify('production')
};


const watchGroup = [
  {
    from: 'src/build/index.js',
    to: 'dist/hu.js'
  },
  {
    from: 'src/build/polyfill.js',
    to: 'dist/hu.polyfill.js'
  },
  {
    from: 'src/build/polyfill.async.js',
    to: 'dist/hu.polyfill.async.js'
  }
];


module.exports = {

  group: {

    watch: [
      ...watchGroup,
      {
        from: 'src/html/src/index.js',
        to: 'src/html/index.js',
        name: undefined,
        format: 'es',
        babel: false
      }
    ],

    build: [
      ...watchGroup,
      {
        mode: true,
        from: 'src/build/index.js',
        to: 'dist/hu.min.js',
        replace: REPLACE_PRODUCTION
      },
      {
        mode: true,
        from: 'src/build/polyfill.js',
        to: 'dist/hu.polyfill.min.js',
        replace: REPLACE_PRODUCTION
      },
      {
        mode: true,
        from: 'src/build/polyfill.async.js',
        to: 'dist/hu.polyfill.async.min.js',
        replace: REPLACE_PRODUCTION
      }
    ],

    polyfill: [
      {
        from: 'src/build/webcomponentsjs/src/index.js',
        to: 'src/build/webcomponentsjs/index.js',

        rollup: true,
        babel: false,
        mode: false,

        on: {
          ConfigCreated( rollup ){
            rollup.inputOptions.context = 'window';

            rollup.inputOptions.plugins.push({
              name: 'webcomponentsjs-replace',
              transform( code, id ){
                return code
                  // 不支持 IE 浏览器
                  .replace( /\/Trident\/.test\(navigator.userAgent\)/g, 'false' )
                  .replace( /navigator.userAgent.match\("Trident"\)/g, 'false' )
                  // 支持列表中的浏览器都支持 Object.assign
                  .replace( /Object.assign (\|\|)/g, 'true $1' )
                  // 支持列表中的浏览器都支持 Promise
                  .replace( /!window.Promise/g, 'false' )
                  // 支持列表中的浏览器都支持 HTMLTemplateElement
                  .replace( /typeof HTMLTemplateElement/g, '"function"' )
                  // 仅 IE 支持 setImmediate
                  .replace( /typeof setImmediate/g, '"undefined"' )
                  // 支持列表中的浏览器都支持 Object.getOwnPropertySymbols
                  .replace( /(Copyright \(C\) 2015 by WebReflection.+?\*\/\s+\(function \(a, b\) \{\s+if \(!\()b in a(\)\) \{)/s, '$1 true $2' )
              }
            });
          }
        }
      }
    ]

  },

  config: {
    name: 'Hu',
    format: 'umd',

    rollup: true,

    babel: false,

    terserOptions: {
      ecma: 6,
      compress: {
        /**
         * 压缩代码次数
         */
        passes: 3,
        /**
         * 不安全的转换
         * 
         * new Array( 1, 2, 3 )                         -> [ 1, 2, 3 ]
         * Array( 1, 2, 3 )                             -> [ 1, 2, 3 ]
         * new Object()                                 -> {}
         * String( exp )                                -> "" + exp
         * exp.toString()                               -> "" + exp
         * new Object/RegExp/Function/Error/Array (...) -> Object/RegExp/Function/Error/Array (...)
         * "foo bar".substr( 4 )                        -> "bar"
         */
        unsafe: true,
        /**
         * 优化表达式
         * 
         * Array.prototype.slice.call( a )              ->  [].slice.call(a)
         */
        unsafe_proto: true,
        /**
         * 优化匿名函数
         * 
         * (function(){})()                             -> (() => {})()
         */
        unsafe_arrows: true,
        /**
         * 简短写法
         * 
         * { a: function(){} }                          -> { a(){} }
         */
        unsafe_methods: true
      }
    },

    replace: {
      'process.env.NODE_ENV': JSON.stringify('development'),
      '__VERSION__': package.version
    },

    on: {
      ConfigCreated( rollup, config ){
        if( config.rollup && config.name === 'Hu' && config.format === 'umd' ){
          rollup.inputOptions.context = 'window';
        }
      },
      WriteFile( rollup, config, path, size, gzipSize ){
        const name = path.split('\\').$get( -1 );
        const rSearch = new RegExp(`(\\|\\s${ name }\\s+\\|\\s)[0-9\\.]+(KB\\s\\|\\s)[0-9\\.]+(KB\\s\\|)`);
        const readmeContent = fs.readFileSync( READMEPATH, 'utf-8' );

        if( rSearch.test( readmeContent ) ){
          fs.writeFileSync(
            READMEPATH,
            readmeContent.replace(
              rSearch,
              `$1${ ( size / 1024 ).toFixed( 2 ) }$2${ ( gzipSize / 1024 ).toFixed( 2 ) }$3`
            )
          );
        }
      }
    }
  }

};