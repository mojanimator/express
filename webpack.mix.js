let mix = require('laravel-mix');
let nodeExternals = require('webpack-node-externals');


mix.js('src/assets/js/app.js', 'public/js')
    .js('dev-server/index.js', 'prod-server')
    .sass('src/assets/scss/app.scss', 'public/css')
    .version()
    .webpackConfig({

        devServer: {
            disableHostCheck: true,

        },
        target: 'node', // in order to ignore built-in modules like path, fs, etc.
        externals: [nodeExternals()],

    });