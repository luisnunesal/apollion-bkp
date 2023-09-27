process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
  throw err;
});

import path from 'path';

import chalk from 'react-dev-utils/chalk';
import checkRequiredFiles from 'react-dev-utils/checkRequiredFiles';
import FileSizeReporter from 'react-dev-utils/FileSizeReporter';
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';
import printBuildError from 'react-dev-utils/printBuildError';
import printHostingInstructions from 'react-dev-utils/printHostingInstructions';
import merge from 'deepmerge';
import fs from 'fs-extra';
import webpack, { Configuration } from 'webpack';

import { getEnviroment } from '../config/env';
import defaultPaths, { AppPaths } from '../config/paths';
import { CustomConfigType, defaultDevConfig } from '../config/shared';
import configFactory from '../config/webpack.config';

const { measureFileSizesBeforeBuild, printFileSizesAfterBuild } = FileSizeReporter;

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

function copyPublicFolder(paths: AppPaths) {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: (file) => file !== paths.appHtml,
  });
}

// Generate configuration
// const config = configFactory('production', paths);

// Create the production build and print the deployment instructions.
function build(config: Configuration, previousFileSizes: unknown) {
  console.log('Creating an optimized production build...');

  const compiler = webpack(config);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      let messages;
      if (err) {
        if (!err.message) {
          return reject(err);
        }

        const errMessage = err.message;

        messages = formatWebpackMessages({
          errors: [errMessage],
          warnings: [],
        });
      } else {
        messages = formatWebpackMessages(stats?.toJson({ all: false, warnings: true, errors: true }));
      }
      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }
        return reject(new Error(messages.errors.join('\n\n')));
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' || process.env.CI.toLowerCase() !== 'false') &&
        messages.warnings.length
      ) {
        console.log(
          chalk.yellow(
            '\nTreating warnings as errors because process.env.CI = true.\n' +
              'Most CI servers set it automatically.\n',
          ),
        );
        return reject(new Error(messages.warnings.join('\n\n')));
      }

      const resolveArgs = {
        stats,
        previousFileSizes,
        warnings: messages.warnings,
      };

      return resolve(resolveArgs);
    });
  });
}

export async function createProductionBuild(
  paths: AppPaths,
  userConfig: CustomConfigType = defaultDevConfig,
): Promise<void> {
  // Warn and crash if required files are missing
  if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
    process.exit(1);
  }

  const useCustomConfig = fs.existsSync(paths.appCustomConfig);

  const { configureWebpack, ...options }: CustomConfigType = useCustomConfig
    ? merge.all([defaultDevConfig, userConfig, require(paths.appCustomConfig) ?? {}])
    : Object.assign(defaultDevConfig, userConfig);

  const baseConfig = configFactory('production', paths, options) as Configuration;

  const config =
    configureWebpack && typeof configureWebpack === 'function'
      ? configureWebpack(baseConfig, 'production')
      : baseConfig;

  const previousSizes = await measureFileSizesBeforeBuild(paths.appBuild);

  try {
    // Remove all content but keep the directory so that
    // if you're in it, you don't end up in Trash
    fs.emptyDirSync(paths.appBuild);

    // Merge with the public folder
    copyPublicFolder(paths);

    if (useCustomConfig) {
      console.log(`${chalk.cyan('Using custom config from:')} ${chalk.yellow(paths.appCustomConfig)}\n`);
    }

    // Start the webpack build
    const { stats, previousFileSizes, warnings } = (await build(config, previousSizes)) as any;

    if (warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.\n'));
      console.log(warnings.join('\n\n'));
      console.log(`\nSearch for the ${chalk.underline(chalk.yellow('keywords'))}  to learn more about each warning.`);
      console.log(`To ignore, add ${chalk.cyan('// eslint-disable-next-line')} to the line before.\n`);
    } else {
      console.log(chalk.green('Compiled successfully.\n'));
    }

    console.log('File sizes after gzip:\n');
    printFileSizesAfterBuild(
      stats,
      previousFileSizes,
      paths.appBuild,
      WARN_AFTER_BUNDLE_GZIP_SIZE,
      WARN_AFTER_CHUNK_GZIP_SIZE,
    );
    console.log();

    const useYarn = fs.existsSync(paths.yarnLockFile);
    const appPackage = require(paths.appPackageJson);
    const publicUrl = paths.publicUrlOrPath;
    const { publicPath } = config.output!;
    const buildFolder = path.relative(process.cwd(), paths.appBuild);
    printHostingInstructions(appPackage, publicUrl, publicPath, buildFolder, useYarn);
  } catch (err) {
    const tscCompileOnError = process.env.TSC_COMPILE_ON_ERROR === 'true';
    if (tscCompileOnError) {
      console.log(
        chalk.yellow(
          'Compiled with the following type errors (you may want to check these before deploying your app):\n',
        ),
      );
      printBuildError(err);
    } else {
      console.log(chalk.red('Failed to compile.\n'));
      printBuildError(err);
      process.exit(1);
    }
  }
}

if (require.main === module) {
  getEnviroment(defaultPaths);
  createProductionBuild(defaultPaths);
}
