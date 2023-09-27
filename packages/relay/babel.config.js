module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
  plugins: [
    [
      'relay',
      {
        compat: true,
        schema: './jestEnvironment/schema.graphql',
      },
    ],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
  ],
};
