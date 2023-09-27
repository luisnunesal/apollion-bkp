const fs = require('fs').promises;
const path = require('path');

const changelog = path.resolve(__dirname, '../../CHANGELOG.md');
const changelogDocs = path.resolve(__dirname, '../docs/CHANGELOG.md');

fs.readFile(changelog, 'utf-8')
  .then(data => {
    const content =
      '--- \n' + 'id: changelog \n' + 'title: CHANGELOG \n' + '--- \n\n';

    const result = content + data;
    return fs.writeFile(changelogDocs, result, 'utf-8');
  })
  .then(() => console.log('SUCCESS on creating changelog docs'))
  .catch(() => {
    console.error('FAIL on creating changelog docs');
    process.exit(1);
  });
