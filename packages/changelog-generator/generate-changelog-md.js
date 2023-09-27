#!/usr/bin/env node
const {
  getLogFiles,
  getFilesContent,
  formatVersionObjToReadableLog,
  saveChangelog,
  getCurrentBranchName,
  createGenerateChangelogInquirer,
  formatLogTemplate,
  groupAndSortPackages,
  logsLength,
  changelogConfig,
  validateChangelogConfig,
} = require('./utils');

const VALID_BRANCHS = changelogConfig['allowed-branchs'];

const main = async () => {
  validateChangelogConfig();

  const newLogsAmount = logsLength();

  if (newLogsAmount === 0) {
    console.log('There are no new logs file to be added to CHANGELOG.md');
    return;
  }

  const branchName = await getCurrentBranchName();

  if (!VALID_BRANCHS.includes(branchName)) {
    console.error('ERROR WHILE GENERATING CHANGELOG.MD');
    console.error(
      `You must be in ${VALID_BRANCHS.join(
        ' | '
      )} branch to generate CHANGELOG.md - ${branchName} received.`
    );
    return;
  }

  const files = getLogFiles();
  const filesContent = getFilesContent(files);

  const { releaseDate } = await createGenerateChangelogInquirer();

  const groupAndSortPackagesFn = groupAndSortPackages(filesContent);

  const changelogContent = Object.keys(filesContent)
    .map(groupAndSortPackagesFn)
    .map(formatVersionObjToReadableLog)
    .join('\n');

  const template = formatLogTemplate(releaseDate, changelogContent);

  saveChangelog(template, files);
};

main();
