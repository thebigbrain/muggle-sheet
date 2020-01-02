import React from "react";
import {useOvermind} from "store";
// import Spreadsheet from "react-spreadsheet";
import Spreadsheet from "components/Sheet";

export default function DataSheet(props) {
  const {state, actions} = useOvermind();

  return (
    <Spreadsheet
      data={state.grid}
    />
  );
}
