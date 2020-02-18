import React from "react";
import { createHook } from "overmind-react";
import store from "store";
import { useContext } from "react";

export { Provider as OvermindProvider } from "overmind-react";

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
