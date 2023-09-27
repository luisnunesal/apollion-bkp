const { changelogConfig } = require('./path.util');

const requiredKeys = [
  'project-name',
  'project-url',
  'base-issue-url',
  'release-weeks',
  'release-day-of-week',
  'allowed-branchs',
  'packages',
  'categories',
];

const validateChangelogConfig = () => {
  const changelogKeys = Object.keys(changelogConfig);
  const isValidConfig = requiredKeys.every((key) =>
    changelogKeys.includes(key)
  );

  if (!isValidConfig) {
    const missingKeys = requiredKeys.filter(
      (key) => !changelogKeys.includes(key)
    );

    console.log(
      '[changelog-generator]: changelog config.json file has missing keys'
    );
    console.log('\n');
    console.log(
      `[changelog-generator]: missing keys are ${missingKeys.join(', ')}`
    );

    throw Error('[changelog-generator]: Invalid config.json file.');
  }
};

module.exports = {
  validateChangelogConfig,
};
