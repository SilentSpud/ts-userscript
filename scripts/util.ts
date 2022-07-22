import fs from "fs";
import path from "path";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "postcss";
import cssModules from "postcss-modules";
import pkg from "../package.json";

const extensions = [".ts", ".tsx", ".js"];
/*
const rollupPluginMap = {
  css: () => cssPlugin(),
  babel: () => "SWC",
  replace: () => replace({ values }),
  resolve: () => resolve({ extensions }),
  commonjs: () => commonjs(),
};

function cssPlugin() {
  const cssMap = {};
  const postcssPlugins = {
    css: getPostcssPlugins(),
    cssModules: getPostcssPlugins({
      cssModules: {
        getJSON(cssFilename, json) {
          cssMap[cssFilename] = json;
        },
      },
    }),
  };
  return {
    name: "CSSPlugin",
    resolveId(importee, importer) {
      if (importee.endsWith(".css")) {
        const cssId = path.resolve(path.dirname(importer), importee);
        this.addWatchFile(cssId);
        return `${cssId}.js`;
      }
    },
    load(id) {
      if (id.endsWith(".css.js")) {
        return new Promise((resolve, reject) => {
          fs.readFile(id.slice(0, -3), "utf8", (err, data) => {
            if (err) reject(err);
            else resolve(data);
          });
        });
      }
    },
    transform(code, id) {
      let plugins;
      const filename = id.slice(0, -3);
      if (filename.endsWith(".module.css")) {
        plugins = postcssPlugins.cssModules;
      } else if (filename.endsWith(".css")) {
        plugins = postcssPlugins.css;
      }
      if (plugins) {
        return postcss(plugins)
          .process(code, {
            from: filename,
            parser: require("postcss-scss"),
          })
          .then((result) => {
            const classMap = cssMap[filename];
            return [
              `export const css = ${JSON.stringify(result.css)};`,
              classMap &&
                `export const classMap = ${JSON.stringify(classMap)};`,
            ]
              .filter(Boolean)
              .join("\n");
          });
      }
    },
  };
}
type Plugin = {
  babelConfig?: any;
  esm?: boolean;
  aliases?: any;
}
export function getRollupPlugins({ babelConfig, esm, aliases }: Plugin = {}) {
  return [
    aliases && rollupPluginMap.alias(aliases),
    rollupPluginMap.css(),
    rollupPluginMap.babel({ babelConfig, esm }),
    rollupPluginMap.replace(),
    rollupPluginMap.resolve(),
    rollupPluginMap.commonjs(),
  ].filter(Boolean);
}*/
