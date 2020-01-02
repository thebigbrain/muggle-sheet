import React from 'react';
import FormulaBar from 'components/Sheet/FormulaBar';
import SheetBase from 'components/Sheet/SheetBase';
import {StyledSheet} from 'components/elements';
import {AutoSizer} from 'react-virtualized';

export default function (props) {
  return (
    <StyledSheet>
      <FormulaBar/>
      <AutoSizer>
        {({width, height}) => <SheetBase width={width} height={height - 24}/>}
      </AutoSizer>
    </StyledSheet>
  );
}
