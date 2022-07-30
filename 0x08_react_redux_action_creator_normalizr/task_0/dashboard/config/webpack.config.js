const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: //path.resolve(__dirname, '../src/index.js'),
  {
    main: path.resolve(__dirname, '../src/index.js'),
    //html: path.resolve(__dirname, './dist/index.html'), 
  },
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    //contentBase: path.join(__dirname, './dist'),
    static: ["../dist"],
    hot: true,
    open: true,
    compress: true,
    //port: 8564,
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new HtmlWebpackPlugin({
      name: "index.html",
      title: "Development Dash",
      template: path.resolve(__dirname, '../index.html'),
      favicon: path.resolve(__dirname, '../src/assets/favicon.ico')
    }),
  ],
  performance: {
    maxAssetSize: 1024 * 1024,
    maxEntrypointSize: 1024 * 1024,
  },
  module: {
    rules: [
      // {
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   use: [ 'babel-loader?presets[]=react,presets[]=es2015'],
      //   //loaders: ["react-hot", 'babel-loader'],
      //   //query: {
      //   //    presets : ['es2015', 'react']
      //   //}
      // },
      // {
      //   test: /\.html$/,
      //   use: "file?name=[name].[ext]"
      // },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
      }
    ]
  },
};
