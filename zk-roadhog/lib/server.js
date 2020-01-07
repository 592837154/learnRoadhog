let webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack');
function runServer() {
    let config = require('./webpack.config');
    let compiler = webpack(config);
    compiler.run((err, stats)=> {
        const devServer =new  webpackDevServer(compiler, {
            contentBase: 'dist'
        });
        devServer.listen(8080, '0.0.0.0', function () {
            console.log('start');
        })
    })
    
}
runServer();