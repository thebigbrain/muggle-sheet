/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { StyledSheet } from "stories/components/elements";
import { AutoSizer } from "react-virtualized";
import { useOvermind } from "hooks/overmind";
import SheetBase from "stories/components/SheetBase";
import FormulaBar from "stories/components/FormulaBar";

function Sheet() {
  const { state } = useOvermind();
  const data = state.sheetData;

  if (data == null) return null;

  return (
    <AutoSizer>
      {({ width, height }) => (
        <SheetBase width={width} height={height - 24} data={data} />
      )}
    </AutoSizer>
  );
}

export default function(props) {
  const { actions } = useOvermind();
  actions.updateSheet();

  // setTimeout(() => {
  //   let partial = {};
  //   for (let i = 1; i < 100; i++) {
  //     for (let j = 1; j < 10; j++) {
  //       partial[`${i},${j}`] = Math.random().toFixed(2);
  //     }
  //   }
  //   actions.updateGrid(partial);
  // });

  return (
    <StyledSheet>
      <FormulaBar onCalc={actions.calcFormula} />
      <Sheet />
    </StyledSheet>
  );
}
