module.exports = function(context, opts) {
  return {
    name: "docusaurus-replace-content-loader",
    configureWebpack(config, isServer) {
      return {
        module: {
          rules: [{
            test: /\.mdx$/,
            use: {
              loader: 'replace-path-for-content-loader',
              options: {
                specialChar: '$',
                searchFor: ['code']
              }
            }
          }]
        }
      }
    }
  }
};
