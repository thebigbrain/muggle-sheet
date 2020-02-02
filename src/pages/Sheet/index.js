import React from "react";
import { StyledSheet } from "components/elements";
import { AutoSizer } from "react-virtualized";
import FormulaBar from "./FormulaBar";
import SheetBase from "./SheetBase";

export default function(props) {
  return (
    <StyledSheet>
      <FormulaBar />
      <AutoSizer>
        {({ width, height }) => (
          <SheetBase width={width} height={height - 24} />
        )}
      </AutoSizer>
    </StyledSheet>
  );
}
