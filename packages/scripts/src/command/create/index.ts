/* eslint-disable no-use-before-define, no-param-reassign */

import os from 'os';
import path from 'path';

import chalk from 'chalk';
import spawn from 'cross-spawn';
import fs from 'fs-extra';

import {
  projectNameInput,
  shouldUseYarn,
  templateDependencies,
  templateFolder,
  tryGitCommit,
  tryGitInit,
  validProjectName,
} from './helper';

export async function createTemplate(projectName: string) {
  return getProjectName({ projectName })
    .then(createProjectFolder)
    .then(copyTemplate)
    .then(createPackageJson)
    .then(changeCurrentDirectory)
    .then(installDependencies)
    .then(startGitRepo)
    .then(successMessage);
}

async function getProjectName(config) {
  const { projectName } = config;

  const [result, reason] = validProjectName(projectName);

  const isValidName = result && !!projectName;

  if (!isValidName) {
    if (projectName) {
      console.error(chalk.red(`Nome Invalido: ${reason}`));
    }

    const { inputName } = await projectNameInput();

    config.projectName = inputName;
  }

  return config;
}

async function createProjectFolder(config) {
  const projectFolder = path.resolve(config.projectName);

  await fs.ensureDir(projectFolder);

  config.projectFolder = projectFolder;

  return config;
}

async function copyTemplate(config) {
  const { projectFolder } = config;

  await fs.copy(templateFolder, projectFolder);

  console.log(chalk.green(`Criando novo projeto em:\n${chalk.cyan(projectFolder)}\n`));

  return config;
}

async function createPackageJson(config) {
  const { projectName, projectFolder } = config;

  await fs.writeJson(
    path.join(projectFolder, 'package.json'),
    {
      name: projectName,
      version: '0.1.0',
      private: true,
      author: process.env.USER || os.hostname(),
      license: 'MIT',
      scripts: {
        start: 'scripts dev',
        build: 'scripts build',
        test: 'scripts test -- --config=jest.config.js',
        lint: 'eslint --quiet src --ext ts,tsx',
        'lint:full': 'eslint src --ext ts,tsx',
        'lint:fix': 'eslint --fix src --ext ts,tsx',
        'prettier:write': 'prettier src/ --write',
        'audit-dependencies': 'audit-ci --config audit-ci.json',
      },
      husky: {
        hooks: {
          'pre-commit': 'lint-staged',
          'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
        },
      },
      'lint-staged': {
        '*.{json,css,md}': ['yarn prettier:write'],
        '*.{ts,tsx}': ['yarn audit-dependencies', 'yarn lint', 'yarn prettier:write'],
      },
    },
    {
      spaces: 2,
    },
  );

  return config;
}

async function changeCurrentDirectory(config) {
  process.chdir(config.projectFolder);

  return config;
}

async function installDependencies(config) {
  const useYarn = shouldUseYarn();

  const displayCommand = useYarn ? 'yarn' : 'npm';

  console.log(`Instalando dependencias com ${chalk.yellow(useYarn ? 'yarn' : 'npm')}\n`);

  config.useYarn = useYarn;
  config.displayCommand = displayCommand;

  return new Promise((resolve, reject) => {
    let command = 'npm';

    let args = ['install', '--save', '--loglevel', 'error'].concat(templateDependencies);

    if (useYarn) {
      command = 'yarnpkg';

      args = ['add', '--exact'].concat(templateDependencies);
    }

    const child = spawn(command, args, { stdio: 'inherit' });

    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`${command} ${args.join(' ')}`));
      } else {
        resolve(config);
      }
    });
  });
}

async function startGitRepo(config) {
  const success = tryGitInit();

  config.gitStarted = success;

  if (success) {
    const { useYarn, projectFolder } = config;

    const hooks = ['lint-staged', 'husky', '@commitlint/cli', '@commitlint/config-conventional'];

    let command = 'npm';

    let args = ['install', '--save', '--loglevel', 'error'].concat(hooks);

    if (useYarn) {
      command = 'yarnpkg';

      args = ['add', '--dev', '--exact'].concat(hooks);
    }

    console.log(`Iniciando Git Hooks\n`);

    return new Promise((resolve, reject) => {
      const child = spawn(command, args, { stdio: 'inherit' });

      child.on('close', (code) => {
        if (code !== 0) {
          reject(new Error(`${command} ${args.join(' ')}`));
        } else {
          config.gitInitialCommit = tryGitCommit(projectFolder);

          resolve(config);
        }
      });
    });
  }

  return config;
}

async function successMessage(config) {
  if (config.gitStarted && config.gitInitialCommit) {
    const { projectName, projectFolder, displayCommand, useYarn } = config;

    console.log();
    console.log(chalk.green(`Sucesso! Projeto ${chalk.white(projectName)} Criado em:\n${chalk.white(projectFolder)}`));
    console.log();
    console.log('Comandos:\n');
    console.log(chalk.cyan(`${displayCommand} start`));
    console.log(chalk.cyan(`${displayCommand} ${useYarn ? '' : 'run '}build`));
    console.log(`\n\n`);
  }
}
