const path = require('path');

module.exports = {
  entry: {
    main: `./js/main.js`
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, `dist`)
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }, {
        test: require.resolve('jquery'),
        loader: 'expose-loader?jQuery!expose-loader?$'
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx']
  }
}
