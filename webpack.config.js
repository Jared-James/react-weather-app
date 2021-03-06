const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true,
      inline: true
   },

   module: {
      rules: [
         {
            test: /\.js$|jsx/,
            use: 'babel-loader',
         },
         {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         }
      ]
   },
   resolve: { extensions: ["*", ".js", ".jsx", '.scss'] },
   plugins: [
      new HtmlWebpackPlugin({
         inject: true,
         template: path.resolve(__dirname, 'public/index.html'),
         filename: 'index.html'
      }),
   ]
};



