import fs from 'fs';

import errorOverlayMiddleware from 'react-dev-utils/errorOverlayMiddleware';
import evalSourceMapMiddleware from 'react-dev-utils/evalSourceMapMiddleware';
import ignoredFiles from 'react-dev-utils/ignoredFiles';
import noopServiceWorkerMiddleware from 'react-dev-utils/noopServiceWorkerMiddleware';
import redirectServedPath from 'react-dev-utils/redirectServedPathMiddleware';

import { AppPaths } from './paths';

export default (proxy: any, allowedHost: any, paths: AppPaths) => {
  const host = process.env.HOST || '0.0.0.0';
  const sockHost = process.env.WDS_SOCKET_HOST;
  const sockPath = process.env.WDS_SOCKET_PATH; // default: '/sockjs-node'
  const sockPort = process.env.WDS_SOCKET_PORT;

  return {
    disableHostCheck: !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
    compress: true,
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    contentBasePublicPath: paths.publicUrlOrPath,
    watchContentBase: true,
    hot: true,
    transportMode: 'ws',
    injectClient: false,
    sockHost,
    sockPath,
    sockPort,
    publicPath: paths.publicUrlOrPath.slice(0, -1),
    quiet: true,
    watchOptions: {
      ignored: ignoredFiles(paths.appSrc),
    },
    host,
    overlay: false,
    historyApiFallback: {
      disableDotRule: true,
      index: paths.publicUrlOrPath,
    },
    public: allowedHost,
    proxy,
    before(app, server) {
      app.use(evalSourceMapMiddleware(server));
      app.use(errorOverlayMiddleware());

      // We will not use proxy i guess

      if (fs.existsSync(paths.proxySetup)) {
        require(paths.proxySetup)(app);
      }
    },
    after(app) {
      app.use(redirectServedPath(paths.publicUrlOrPath));
      app.use(noopServiceWorkerMiddleware(paths.publicUrlOrPath));
    },
  };
};
