const groupArrayBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );

const groupAndSortPackages = (filesContent) => (packageName) => {
  const content = filesContent[packageName];
  const categories = Object.keys(content);

  return {
    [packageName]: categories.reduce(
      (previous, category) => ({
        ...previous,
        [category]: content[category].sort((a, b) => b.issue - a.issue),
      }),
      {}
    ),
  };
};

module.exports = {
  groupArrayBy,
  groupAndSortPackages,
};
