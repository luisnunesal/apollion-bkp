const JestEnviroment = require('jest-environment-jsdom-fifteen');
const expressServer = require('./testServer');

const PORT = 5000;

class CustomEviroment extends JestEnviroment {
  constructor(config, context) {
    super(config, context);
  }

  async setup() {
    await super.setup();
    let server;
    await new Promise(function (resolve) {
      server = expressServer.listen(PORT, () => {
        console.log(`Running server on port ${PORT}`);
        resolve();
      });
    });
    this.global.server = server;
  }

  async teardown() {
    this.global.server.close();
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = CustomEviroment
