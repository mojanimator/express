module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
          @import "@/assets/scss/_variables.scss";
          
        `
            }
        },

    },
    devServer: {
        disableHostCheck: true,
        target: 'node',
        // headers: {
        //     "Access-Control-Allow-Origin": "*"
        // },
        // host: '0.0.0.0',
    },
    // assetsDir: process.env.NODE_ENV === 'production'
    //     ? 'static'
    //     : 'http://localhost:8080/',
    // baseUrl: process.env.NODE_ENV === 'production'
    //     ? '/' // mess up assetsDir if this is blank
    //     : 'http://localhost:8080/',
};