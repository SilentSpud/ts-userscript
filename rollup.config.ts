import fs from "fs";
import swc from "rollup-plugin-swc";
import externalGlobals from "rollup-plugin-external-globals";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import pkg from "./package.json";
import { RollupOptions } from "rollup";

export default (async () => {
  // Read .swcrc and parse it as json
  const swcrc = JSON.parse(fs.readFileSync(".swcrc", "utf8"));
  const BANNER = fs.readFileSync("src/meta.js", "utf8");

  // Per-file options
  const rollupConfig: RollupOptions[] = [
    {
      // index.ts
      input: "src/index.ts",
      output: {
        file: `build/${pkg.name}.user.js`,
      },
    },
  ];

  // Global options
  rollupConfig.map((item) =>
    Object.assign(item, {
      plugins: [
        swc({
          rollup: {
            exclude: "node_modules/**",
          },
          ...swcrc,
        }),
        externalGlobals({
          "@violentmonkey/dom": "VM",
        }),
        nodeResolve(),
      ],
      output: {
        format: "iife",
        indent: false,
        extend: true,
        esModule: false,
        externalLiveBindings: false, // If set to false, circular dependencies and live bindings for external imports won't work
        ...(BANNER && { banner: BANNER }),
      },
    })
  );
})();
