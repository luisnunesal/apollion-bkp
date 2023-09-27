const { JSDOM } = require('jsdom');
const server = require('./testServer');

module.exports = async () => {
  const httpServer = await server.listen(5000, () => {
    console.log(`\n test server running at: \n${JSON.stringify(httpServer.address(), null, 2)}`);
  });

  Object.assign(global, { httpServer });
};
