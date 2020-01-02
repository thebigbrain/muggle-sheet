import React from "react";
import {Divider} from "@material-ui/core";
import {FormulaBarContainer, FormulaInput} from "components/elements";
import {IconFunction} from 'components/icons';

export default function (props) {
  return (
    <FormulaBarContainer>
      <IconFunction/>
      <Divider orientation="vertical" />
      <FormulaInput/>
    </FormulaBarContainer>
  );
}
