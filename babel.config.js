module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@presentation": "./src/presentation",
            "@domain": "./src/domain",
            "@infra": "./src/infra",
            "@main": "./src/main",
            "@data": "./src/data",
          },
        },
      ],
    ],
  };
};
