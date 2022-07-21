module.exports = {
  extends: require.resolve("@gera2ld/plaid/config/babelrc-base"),
  presets: [
    [
      "@babel/preset-typescript",
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "#": "./src",
        },
      },
    ],

    // JSX
    [
      "@babel/plugin-transform-react-jsx",
      {
        pragma: "VM.createElement",
        pragmaFrag: "VM.Fragment",
      },
    ],
  ].filter(Boolean),
};
