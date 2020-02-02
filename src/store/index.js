import React from "react";
import { createOvermind } from "overmind";
import { createHook, Provider } from "overmind-react";
import { namespaced, merge } from "overmind/config";
import state from "./state";
import * as actions from "./actions";
import * as effects from "./effects";

export const config = merge(
  {
    state,
    actions,
    effects
  },
  namespaced({})
);

export const overmind = createOvermind(config, {
  devtools: false,
  logProxies: false
});

export const OvermindProvider = props => (
  <Provider value={overmind}>{props.children}</Provider>
);
export const useOvermind = createHook();
