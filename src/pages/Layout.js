/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { styled } from "@material-ui/styles";
import { json } from "overmind";
import { Switch, Route, Redirect } from "react-router-dom";

import store from "store";
import { useOvermind, StoreContext } from "hooks/overmind";
import { installPlugin } from "base/runtime";

const StyledLayout = styled("div")({
  width: "100%",
  height: "100%"
});

const Loading = styled(props => <div>{props.text}</div>)({
  justifyContent: "center",
  padding: "30px"
});

const NoMatch = () => <div>Not Found</div>;

const INSTALLED_MODULE_CACHE = new Map();

const installModule = mod => {
  const { state, actions, effects } = store;
  const ns = mod.namespace;
  const name = mod.name;

  state[name] = ns.state;
  const modActions = {};
  for (let k in ns.actions) {
    modActions[k] = arg => {
      ns.actions[k](o, arg);
      store.proxyStateTree.flush([store.proxyStateTree.mutationTree]);
    };
  }
  actions[name] = modActions;
  effects[name] = ns.effects;

  const o = {
    state: state[name],
    actions: actions[name],
    effects: effects[name],
    overmind: store
  };

  if (ns.onInitialize) ns.onInitialize(o);

  return o;
};

function renderUi(ui) {
  const mod = ui.component
    ? json(ui.component)
    : installPlugin(ui.name, ui.source);
  if (!mod) {
    return null;
  }

  if (!INSTALLED_MODULE_CACHE.has(ui.name)) {
    INSTALLED_MODULE_CACHE.set(ui.name, installModule(mod));
  }

  return props => {
    return mod.component ? (
      <StoreContext.Provider value={INSTALLED_MODULE_CACHE.get(ui.name)}>
        <mod.component {...props} />
      </StoreContext.Provider>
    ) : null;
  };
}

function renderRoutes(routes) {
  let redirectComponent = null;
  const routeComponents = routes.map(route => {
    if (route.redirect) {
      redirectComponent = (
        <Redirect
          key={`redirect:${Math.random()}:${route.redirect}`}
          to={route.redirect}
          exact
        />
      );

      return null;
    }

    if (!route.ui) return null;

    const ui = route.ui;
    const OtherComponent = renderUi(ui);

    const path = route.path;
    const exact = route.exact == null ? path === "/" || !path : route.exact;

    return (
      <Route key={path} path={path} exact={exact}>
        {OtherComponent && <OtherComponent {...ui.initialProps} />}
      </Route>
    );
  });

  return (
    <Switch>
      {routeComponents}
      {redirectComponent}
      <NoMatch />
    </Switch>
  );
}

export default function Layout(props) {
  const { state } = useOvermind();

  if (!state.routes.length) return <Loading text="loading ..." />;

  return <StyledLayout>{renderRoutes(state.routes)}</StyledLayout>;
}
