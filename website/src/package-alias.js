const path = require('path');

module.exports = function (context, options) {
  return {
    name: 'package-alias',
    configureWebpack() {
      return {
        resolve: {
          alias: {
            react: path.resolve('../node_modules/react'),
          },
        },
      };
    },
  };
};
