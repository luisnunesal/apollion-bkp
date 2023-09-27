#!/usr/bin/env node

import chalk from 'chalk';
import spawn from 'cross-spawn';
import updateNotifier from 'update-notifier';

import { createTemplate } from './command/create';

const notifier = updateNotifier({
  pkg: require('../package.json'),
  updateCheckInterval: 1000 * 60 * 60, // 1hr
});

notifier.notify({
  defer: false,
  message: `Update available ${chalk.dim('{currentVersion}')} ${chalk.reset(' → ')} ${chalk.green(
    '{latestVersion}',
  )} \nRun ${chalk.cyan('yarn add {packageName}')} to update.`,
});

(async (cmd: string[]) => {
  const [command, ...options] = cmd;

  if (['build', 'dev', 'test'].includes(command)) {
    const result = spawn.sync(process.execPath, [require.resolve(`./command/${command}`), ...options], {
      stdio: 'inherit',
    });

    return process.exit(result.status);
  }

  if (command === 'create') {
    await createTemplate(options[0]);

    return process.exit(0);
  }

  console.log(`${chalk.red('Commando não reconhecido:')} ${chalk.yellow(command)}`);

  process.exit(1);
})(process.argv.slice(2));
