const server = require('./testServer');

module.exports = async () => {
  await global.httpServer.close();
};
