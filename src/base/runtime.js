/* eslint-disable no-new-func */
import React from "react";
import * as overmind from "overmind";
import * as overmindReact from "overmind-react";
// import * as MaterialUiStyle from "@material-ui/styles";
import * as MaterialUiCore from "@material-ui/core";
import * as MaterialUiIcons from "@material-ui/icons";
import * as hooks from "hooks";
import ReactRouterDom from "react-router-dom";
import ReactRouter from "react-router";

const installedModules = new Map([
  ["react", React],
  ["overmind", overmind],
  ["overmind-react", overmindReact],
  ["react-router-dom", ReactRouterDom],
  ["react-router", ReactRouter],
  // ["@material-ui/styles", MaterialUiStyle],
  ["@material-ui/core", MaterialUiCore],
  ["@material-ui/icons", MaterialUiIcons],
  ["hooks", hooks]
]);

const globalRequire = id => {
  return installedModules.get(id);
};

class JModule {
  constructor(id, code, require) {
    this.id = id;
    this.code = code;
    this.require = require;

    this.exports = {};

    this.installed = false;
  }

  init() {
    if (typeof window === "undefined") return;
    // eslint-disable-next-line
    let fn = new Function("module", "exports", "require", this.code || "");
    fn(this, this.exports, this.require);
  }
}

export function installPlugin(id, source) {
  let mod = installedModules.get(id);
  if (mod == null) {
    const m = new JModule(id, source, globalRequire);
    m.init();
    installedModules.set(id, m.exports);
  }
  return mod;
}
