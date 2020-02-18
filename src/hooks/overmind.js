import React from "react";
import { createHook } from "overmind-react";
import store from "store";
import { useContext } from "react";

export { OvermindProvider } from "store";

export const StoreContext = React.createContext({
  state: store.state,
  actions: store.actions,
  effects: store.effects,
  overmind: store
});

export const useOvermind = createHook();

export const useStore = () => {
  return useContext(StoreContext);
};
