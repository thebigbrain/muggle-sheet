import React from "react";
import { useOvermind } from "store";
// import Spreadsheet from "react-spreadsheet";
import Spreadsheet from "./Sheet";

export default function DataSheet(props) {
  const { state, actions } = useOvermind();

  return <Spreadsheet data={state.grid} />;
}
