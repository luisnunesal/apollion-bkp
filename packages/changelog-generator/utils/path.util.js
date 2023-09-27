const fs = require('fs');
const path = require('path');

const rootPath = process.cwd();
const logFilesPath = path.join(rootPath, 'changelog', 'unreleased');

const checkIfHasFolderFromRoot = (folderName) => {
  const folderPath = path.join(rootPath, folderName);
  try {
    return fs.existsSync(folderPath);
  } catch (err) {
    console.log(
      `[changelog-generator]: error while checking if unreleased folder exists: ${err.message}`
    );
    return false;
  }
};

const checkIfHasFileFromRoot = (fileName) => {
  const filePath = path.join(rootPath, fileName);
  try {
    if (fs.existsSync(filePath)) {
      return true;
    }

    return false;
  } catch (err) {
    return false;
  }
};

const fetchFileFromRoot = (fileName, isJson = true) => {
  try {
    const filePath = path.join(rootPath, fileName);
    const file = fs.readFileSync(filePath, !isJson ? 'utf8' : undefined);

    return isJson ? JSON.parse(file) : file;
  } catch (err) {
    console.warn(
      `[changelog-generator]: error while fetching file: ${err.message}`
    );

    return null;
  }
};

const isMonoRepo = checkIfHasFileFromRoot('lerna.json');
const hasChangelogConfig = checkIfHasFileFromRoot('changelog/config.json');

if (!hasChangelogConfig) {
  throw Error(
    '[changelog-generator]: the project must have a config.json file inside changelog folder'
  );
}

if (!checkIfHasFolderFromRoot('changelog/unreleased')) {
  fs.mkdirSync(logFilesPath);
}

const changelogConfig = fetchFileFromRoot('changelog/config.json');

module.exports = {
  rootPath,
  isMonoRepo,
  changelogConfig,
  logFilesPath,
  fetchFileFromRoot,
};
