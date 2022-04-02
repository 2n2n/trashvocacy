const { addDecoratorsLegacy } = require('customize-cra')

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config = addDecoratorsLegacy()(config)
    return config;
}