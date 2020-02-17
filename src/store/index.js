import React from "react";
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import { namespaced, merge } from "overmind/config";
import { state } from "./state";
import { onInitialize } from "./onInitialize";
import * as actions from "./actions";
import effects from "./effects";

export const config = merge(
  {
    state,
    actions,
    effects,
    onInitialize
  },
  namespaced({})
);

export const overmind = createOvermind(config, {
  devtools: false,
  logProxies: true
});

if (process.env.NODE_ENV === "development") {
  // disable proxy state tree devmode to pass track mutation
  overmind.proxyStateTree.master.options.devmode = false;
  console.log(overmind);
}

export const OvermindProvider = props => (
  <Provider value={overmind}>{props.children}</Provider>
);

export default overmind;
