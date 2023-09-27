const fs = require('fs');

const { getCurrentBranchName } = require('./git.util');
const {
  changelogConfig,
  logFilesPath,
  rootPath,
  isMonoRepo,
  fetchFileFromRoot,
} = require('./path.util');
const { multipleLinesBreakRegex, replaceAll } = require('./regex.util');

const versionTemplate = fetchFileFromRoot(
  'changelog/templates/version-template.md',
  false
);
const packageTemplate = fetchFileFromRoot(
  'changelog/templates/package-template.md',
  false
);
const categoryContentTemplate = fetchFileFromRoot(
  'changelog/templates/category-content-template.md',
  false
);

const currentChangelogFile = fetchFileFromRoot('CHANGELOG.md', false);

const getLogFiles = () => {
  createFileDirIfNotExists();

  return fs
    .readdirSync(logFilesPath)
    .filter((fileName) => fileName !== '.gitkeep');
};

const readFile = (fileName) => {
  const file = fs.readFileSync(`${logFilesPath}/${fileName}`);

  return JSON.parse(file);
};

const createFileDirIfNotExists = () => {
  if (!fs.existsSync(logFilesPath)) {
    fs.mkdirSync(logFilesPath, { recursive: true });
  }
};

const logsLength = () => {
  const files = getLogFiles();

  return files.length;
};

const getPackageJsonVersion = (packageName) => {
  const packagePath = isMonoRepo ? `packages/${packageName}/` : '';
  const packageJsonPath = `${packagePath}package.json`;

  const { version } = fetchFileFromRoot(packageJsonPath);

  return version;
};

const createFile = (fileName, content) => {
  createFileDirIfNotExists();

  const data = JSON.stringify(content, null, 2);
  const filePath = `${logFilesPath}/${fileName}`;

  fs.writeFileSync(filePath, data);
};

const deletedUnreleasedFile = (fileName) => {
  fs.unlinkSync(`${logFilesPath}/${fileName}`);
};

const saveChangelog = (changelogContent, filesArr) => {
  const changelogTitle = `# CHANGELOG ${changelogConfig['project-name']}`;

  const currentLog = replaceAll(currentChangelogFile, changelogTitle, '');

  const changelogMd = `${changelogTitle}\n\n${changelogContent}\n\n${currentLog}`.replace(
    multipleLinesBreakRegex,
    '\n\n'
  );

  fs.writeFileSync(`${rootPath}/CHANGELOG.md`, changelogMd);

  filesArr.forEach((fileName) => {
    deletedUnreleasedFile(fileName);
  });
};

const getNewFileName = async () => {
  const branchName = await getCurrentBranchName();
  const timeStamp = Date.now();
  const filesLength = logsLength();
  const fileName = `${filesLength}-${timeStamp}-${branchName}.json`;

  return fileName;
};

module.exports = {
  versionTemplate,
  packageTemplate,
  categoryContentTemplate,
  readFile,
  getPackageJsonVersion,
  createFile,
  saveChangelog,
  getNewFileName,
  getLogFiles,
  logsLength,
};
