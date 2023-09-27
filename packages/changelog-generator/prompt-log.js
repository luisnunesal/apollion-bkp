#!/usr/bin/env node
const { getNewFileName, createNewLogInquirer, createFile } = require('./utils');

const log = async () => {
  const { issue, ...values } = await createNewLogInquirer();
  const fileName = await getNewFileName();

  createFile(fileName, {
    ...values,
    issue: +issue,
  });
};

log();
