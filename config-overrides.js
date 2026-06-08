const webpack = require("webpack");

module.exports = function override(config) {
  // https://github.com/lingui/js-lingui/issues/1195
  // Adding loader to use for .po files to webpack
  const loaders = config.module.rules.find((rule) => Array.isArray(rule.oneOf));
  loaders.oneOf.splice(loaders.length - 1, 0, {
    test: /\.po/,
    use: [
      {
        loader: "@lingui/loader",
      },
    ],
  });

  // Silence noisy source map warnings from some third-party deps
  config.module.rules.push({
    test: /\.js$/,
    enforce: "pre",
    use: ["source-map-loader"],
    exclude: [
      /@walletconnect\/core/,
      /@walletconnect\/environment/,
      /@walletconnect\/events/,
      /@walletconnect\/heartbeat/,
      /@walletconnect\/jsonrpc-utils/,
      /@walletconnect\/safe-json/,
      /@walletconnect\/time/,
      /@walletconnect\/window-getters/,
      /@walletconnect\/window-metadata/,
      /jsbi/,
    ],
  });

  config.resolve.fallback = {
    os: false,
    http: false,
    https: false,
    stream: false,
    crypto: false,
  };
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  return config;
};
