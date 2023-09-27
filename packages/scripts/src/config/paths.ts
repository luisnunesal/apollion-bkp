import fs from 'fs';
import path from 'path';

import getPublicUrlOrPath from 'react-dev-utils/getPublicUrlOrPath';

export type AppPaths = {
  dotenv: string;
  appPath: string;
  appBuild: string;
  appPublic: string;
  appHtml: string;
  appIndexJs: string;
  appSrc: string;
  appCustomConfig: string;
  appTsConfig: string;
  yarnLockFile: string;
  testsSetup: string;
  proxySetup: string;
  appNodeModules: string;
  appPackageJson: string;
  publicUrlOrPath: string;
  moduleFileExtensions: string[];
};

export const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
];

export function createAppPaths(basePath: string = process.cwd()): AppPaths {
  const appDirectory = fs.realpathSync(basePath);
  const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

  const appPackageJson = resolveApp('package.json');

  const publicUrlOrPath = getPublicUrlOrPath(
    process.env.NODE_ENV === 'development',
    require(appPackageJson).homepage,
    process.env.PUBLIC_URL,
  );

  // Resolve file paths in the same order as webpack
  const resolveModule = (resolveFn, filePath) => {
    const extension = moduleFileExtensions.find((ext) => fs.existsSync(resolveFn(`${filePath}.${ext}`)));

    if (extension) {
      return resolveFn(`${filePath}.${extension}`);
    }

    return resolveFn(`${filePath}.js`);
  };

  const appCustomConfig = resolveApp('scriptsrc.js');
  const customConfigExist = fs.existsSync(appCustomConfig);

  const appBuildPath = customConfigExist ? require(appCustomConfig).output : 'build';

  return {
    dotenv: resolveApp('.env'),
    appPath: resolveApp('.'),
    appBuild: resolveApp(appBuildPath),
    appPublic: resolveApp('public'),
    appHtml: resolveApp('public/index.html'),
    appIndexJs: resolveModule(resolveApp, 'src/index'),
    appSrc: resolveApp('src'),
    appTsConfig: resolveApp('tsconfig.json'),
    yarnLockFile: resolveApp('yarn.lock'),
    testsSetup: resolveModule(resolveApp, 'src/setupTests'),
    proxySetup: resolveApp('src/setupProxy.js'),
    appNodeModules: resolveApp('node_modules'),
    appCustomConfig,
    appPackageJson,
    publicUrlOrPath,
    moduleFileExtensions,
  };
}

export default createAppPaths();
