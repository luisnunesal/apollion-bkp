const { changelogConfig } = require('./path.util');

const {
  packageTemplate,
  versionTemplate,
  categoryContentTemplate,
  readFile,
} = require('./file.util');
const { groupArrayBy } = require('./array.util');
const { multipleLinesBreakRegex } = require('./regex.util');

const getFilesContent = (paths) => {
  const files = [];

  paths.forEach((filePath) => {
    const fileContent = readFile(filePath);

    files.push(fileContent);
  });

  const groupedFiles = groupArrayBy(files, 'packageName');

  const packageNames = Object.keys(groupedFiles);

  return packageNames.reduce((previous, packageName) => {
    const packageContent = groupedFiles[packageName];

    groupedFiles[packageName] = groupArrayBy(packageContent, 'category');

    return {
      ...previous,
      [packageName]: groupedFiles[packageName],
    };
  }, {});
};

const formatLogLine = ({ issue, title }) =>
  `- [#${issue}](${changelogConfig['base-issue-url']}${issue}) ${title}`;

const formatVersionObjToReadableLog = (item) => {
  const packagesNames = Object.keys(item);

  return packagesNames.reduce((prev, package) => {
    const items = item[package];
    const categories = Object.keys(items);

    const categoriesContent = categories.reduce((prevCatTemplate, category) => {
      const { label, emoji } = changelogConfig.categories.find(
        (cat) => cat.category === category
      );

      const categoryLogs = items[category].reduce((prevItemTemplate, item) => {
        return `${prevItemTemplate}\n${formatLogLine(item)}`;
      }, '');

      let template = categoryContentTemplate
        .replace('{emojiName}', emoji)
        .replace('{categoryLabel}', label)
        .replace('{categoryLogs}', categoryLogs);

      prevCatTemplate += template;
      prevCatTemplate += '\n';

      return prevCatTemplate;
    }, '');

    // Used for getting the version, can be any category of a package
    const packageItem = items[categories[0]];
    // Can be any item as well to get the version of a package
    const packageVersionSplitted = packageItem[0].version.split('.');
    // Patch version must be number of log files for each category
    const patchVersion = categories.reduce(
      (previousNumber, category) => previousNumber + items[category].length,
      0
    );

    const logVersion = `${packageVersionSplitted[0]}.${packageVersionSplitted[1]}.${patchVersion}`;

    return prev
      .replace('{packageName}', package)
      .replace('{projectUrl}', changelogConfig['project-url'])
      .replace('{logVersion}', logVersion)
      .replace('{categoriesContent}', categoriesContent);
  }, packageTemplate);
};

const formatLogTemplate = (releaseDate, packageContent) =>
  versionTemplate
    .replace('{releaseDate}', releaseDate)
    .replace('{packageContent}', packageContent)
    .replace(multipleLinesBreakRegex, '\n\n');

module.exports = {
  formatLogTemplate,
  formatVersionObjToReadableLog,
  formatLogLine,
  getFilesContent,
};
