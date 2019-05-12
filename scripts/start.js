/**
 * Created by nanhuijuan on 2017/5/22.
 */

const openBrowser = require('react-dev-utils/openBrowser');
const config = require('../webpack.config')();

process.env.NODE_ENV = 'development';

require('webpack-dev-server/bin/webpack-dev-server');

setTimeout(
    openBrowser.bind(null, '127.0.0.1:' + config.devServer.port),
    5000
);
