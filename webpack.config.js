let webpack = require('webpack');
module.exports = {
    devServer: {
        disableHostCheck: true

    },
    node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty'
    }
};
// let path = require('path');
// const {
//   VueLoaderPlugin
// } = require('vue-loader')


// module.exports = {
//   entry: {
//     app: './src/assets/js/app.js',
//     vendor: ['vue', 'axios']
//   },

//   output: {
//     path: path.resolve(__dirname, 'public/js'),
//     filename: '[name].js',
//     publicPath: './public',
//   },


//   resolve: {
//     alias: {
//       'vue$': 'vue/dist/vue.common.js'
//     }
//   },
//   module: {
//     rules: [{
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: 'babel-loader'
//       },

//       {
//         test: /\.vue$/,
//         use: 'vue-loader'
//       }, {
//         test: /\.scss$/,
//         use: 'sass-loader'
//       },
//     ]
//   },
//   plugins: [
//     new VueLoaderPlugin(),
//     new webpack.optimize.CommonsChunkPlugin({
//       names: ['vendor']
//     }),
//   ]
// };

// if (process.env.NODE_ENV === 'production') {
//   module.exports.plugins.push(
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     })
//   );

//   module.exports.plugins.push(
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: 'production'
//       }
//     })
//   );

// }