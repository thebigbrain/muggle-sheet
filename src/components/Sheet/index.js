import React from "react";
import FormulaBar from "components/Sheet/FormulaBar";
import SheetBase from 'components/Sheet/SheetBase';

export default function (props) {
  return (
    <React.Fragment>
      <FormulaBar/>
      <SheetBase/>
    </React.Fragment>
  );
}
