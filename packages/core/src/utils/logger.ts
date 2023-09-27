function createLogger() {
  function executeLog(logType: string, message: string, args: Array<any>) {
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    const print = ((type: string) => {
      switch (type) {
        case 'log':
          return console.log;
        case 'warn':
          return console.warn;
        case 'error':
          return console.error;
        default:
          return console.log;
      }
    })(logType);

    if (args) {
      print(message, ...args); // aesthetic only
    } else {
      print(message);
    }
  }

  function log(message: string, ...args: any) {
    executeLog('log', message, args);
  }

  function warn(message: string, ...args: any) {
    executeLog('warn', message, args);
  }

  function error(message: string, ...args: any) {
    executeLog('error', message, args);
  }

  return { log, warn, error };
}

export const LOGGER = createLogger();
