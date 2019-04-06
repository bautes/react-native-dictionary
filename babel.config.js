const commonPlugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ["./src/"],
      alias: {
        "test": "./test"
      }
    }
  ]
];

module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [...commonPlugins],
    presets: [
      'babel-preset-expo'
    ]
  };
};
