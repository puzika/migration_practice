const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: "local",
                auto: true,
                namedExport: false,
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Migration',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ]
}