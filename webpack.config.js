module.exports = {

  entry: [
    './src/index.js'
  ],

  output: {
    path: './dist',
    publicPath: '/',
    filename: 'index.js'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],

    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules']
  }

};
