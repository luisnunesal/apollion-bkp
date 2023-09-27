const { exec } = require('child_process');

const getCurrentBranchName = () =>
  new Promise((resolve, reject) => {
    exec('git branch --show-current', (err, stdout) => {
      if (err) {
        reject(
          new Error(`Error while getting current branch name: ${err.message};`)
        );

        return;
      }

      const branchName = stdout.trim().replace(/\//g, '-');

      resolve(branchName);
    });
  });

const getCurrentGitUser = () =>
  new Promise((resolve, reject) => {
    exec('git config user.name', (err, stdout) => {
      if (err) {
        reject(
          new Error(`Error while getting current user name: ${err.message};`)
        );

        return;
      }

      const userName = stdout.trim();

      resolve(userName);
    });
  });

const createChangelogCommit = () =>
  new Promise((resolve, reject) => {
    exec('git add CHANGELOG.md && git commit -m "Update changelog"', (err) => {
      if (err) {
        reject(
          new Error(`Error while executing git commands: ${err.message};`)
        );

        return;
      }

      resolve();
    });
  });

module.exports = {
  getCurrentBranchName,
  createChangelogCommit,
  getCurrentGitUser,
};
