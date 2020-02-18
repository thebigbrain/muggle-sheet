import { adjustPath } from "./utils";

export const setGrid = ({ state }, grid) => {
  state.grid = grid;
};

export const setRoutes = ({ state }, routes = []) => {
  let tree = new Map();
  routes.forEach(r => tree.set(r.id, r));
  adjustPath(tree);
  state.routes = routes;
};
