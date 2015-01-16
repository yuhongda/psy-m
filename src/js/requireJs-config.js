require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery-1.9.1.min'
    },
    //shim: {
    //    counter: ['counter.min']
    //},
    urlArgs: "bust=" + (new Date()).getTime()
});