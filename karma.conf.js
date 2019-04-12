

module.exports = function( config ){
  config.set({
    singleRun: true,
    browsers: [
      'Chrome', 'Firefox', 'Safari'
    ],
    frameworks: [
      'mocha',
      'chai'
    ],
    files: [
      // Lib
      'test/Lib/zen.fat.js',
      'test/Lib/vue.js',
      'dist/hu.js',
      // Test
      'test/Hu/start.js',
      'test/Hu/*.test.js'
    ]
  });
};