const customConfig = require('../webpack/webpack.common');

module.exports = ({ config }) => {
  config.module.rules.push(...customConfig.module.rules);
  config.resolve.extensions.push(...customConfig.resolve.extensions);
  config.resolve.modules.push(...customConfig.resolve.modules);

  return config;
};
