/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Runtime from "containers/Runtime";
import Layout from "containers/Layout";
import { useOvermind } from "hooks";

export function withProvider(M) {
  const C = () => {
    const { actions } = useOvermind();

    useEffect(() => {
      actions.setRoutes([
        {
          id: Math.random(),
          path: "/",
          name: M.name,
          parent: null,
          exact: false,
          ui: { name: M.name, component: M }
        }
      ]);
    }, []);

    return null;
  };

  return () => (
    <Runtime>
      <Layout />
      <C />
    </Runtime>
  );
}
