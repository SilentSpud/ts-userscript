import fs from "fs";
import rollup from "rollup";
import { getRollupPlugins, getExternal, DIST } from "./scripts/util";
import pkg from "./package.json";

const FILENAME = "index";
const BANNER = fs
  .readFileSync("src/meta.js", "utf8")
  .replace("process.env.VERSION", pkg.version);

const external = getExternal();
const bundleOptions = {
  extend: true,
  esModule: false,
};
const rollupConfig = [
  {
    input: {
      input: "src/index.ts",
      plugins: getRollupPlugins({ esm: true }),
    },
    output: {
      format: "iife",
      file: `${DIST}/${FILENAME}.user.js`,
      ...bundleOptions,
    },
  },
];

rollupConfig.forEach((item) => {
  item.output = {
    indent: false,
    // If set to false, circular dependencies and live bindings for external imports won't work
    externalLiveBindings: false,
    ...item.output,
    ...(BANNER && {
      banner: BANNER,
    }),
  };
});

module.exports = rollupConfig.map(({ input, output }) => ({
  ...input,
  output,
}));
