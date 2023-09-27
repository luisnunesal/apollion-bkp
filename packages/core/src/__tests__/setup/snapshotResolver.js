module.exports = {
  /** resolves from test to snapshot path */
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    return testPath.replace('src/', 'src/__tests__/snapshots/') + snapshotExtension;
  },

  /** resolves from snapshot to test path */
  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    return snapshotFilePath.replace('src/__tests__/snapshots/', 'src/').slice(0, -snapshotExtension.length);
  },

  testPathForConsistencyCheck: 'some/__tests__/test.tsx',
};
