const replaceAll = (str, find, replace) => {
  const escapedFind = find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');

  return str.replace(new RegExp(escapedFind, 'g'), replace);
};

/**
 * Used in case that for any reasons there are more than just one line break
 *
 * In this case, we normally replace regex with `\n\n` and will be changed to a single line break
 *
 */
const multipleLinesBreakRegex = /\n\s*\n/g;

module.exports = {
  replaceAll,
  multipleLinesBreakRegex,
};
