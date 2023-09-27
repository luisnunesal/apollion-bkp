import path from 'path';

import spawn from 'cross-spawn';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import validateProjectName from 'validate-npm-package-name';

export const templateFolder = path.resolve(__dirname, '../../template');
export const templateDependencies = [
  'react',
  'react-dom',
  'typescript',
  'react-router-dom',
  '@types/react',
  '@types/react-dom',
  '@types/react-router-dom',
  'styled-components',
  '@types/styled-components',
  '@captalys-platform/core',
  '@captalys-platform/scripts',
  '@captalys-platform/eslint-config-captalys-platform',
  'audit-ci',
];

export function projectNameInput() {
  return inquirer.prompt({
    type: 'input',
    name: 'inputName',
    message: 'Nome do Projeto: ',
    validate: (query) => {
      const [result, reason] = validProjectName(query);
      return result || `Nome Invalido: ${reason}`;
    },
  });
}

export function validProjectName(appName: string) {
  const validationResult = validateProjectName(appName);

  if (!validationResult.validForNewPackages) {
    return [false, 'npm naming restrictions'];
  }

  if (templateDependencies.includes(appName)) {
    return [false, 'dependency with the same name exists'];
  }

  if (fs.existsSync(appName)) {
    const currentDirectory = process.cwd();

    const files = fs.readdirSync(path.resolve(currentDirectory, appName));

    return files.length === 0 ? [true] : [false, `folder with the same name exist in ${currentDirectory}`];
  }

  return [true];
}

export function shouldUseYarn() {
  try {
    spawn.sync('yarnpkg', ['--version']);
    return true;
  } catch (e) {
    return false;
  }
}

export function tryGitInit() {
  try {
    spawn.sync('git', ['init'], { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

export function tryGitCommit(appPath: string) {
  try {
    spawn.sync('git', ['add', '-A'], { stdio: 'ignore' });
    spawn.sync('git', ['commit', '-m', 'chore: project started'], {
      stdio: 'ignore',
    });
    return true;
  } catch (e) {
    try {
      fs.removeSync(path.join(appPath, '.git'));
    } catch (removeErr) {
      // Do nothing
    }

    return false;
  }
}
