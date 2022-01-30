const path = require('path')
const CracoLessPlugin = require('craco-less')


module.exports = {
    reactScriptsVersion: 'react-scripts',
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ],
    webpack: {
        alias: {
            '@src': path.resolve(__dirname, 'src')
        }
    }
}
