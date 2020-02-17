import React from "react";
import { Divider } from "@material-ui/core";
import { FormulaBarContainer, FormulaInput } from "stories/components/elements";
import { IconFunction } from "stories/components/icons";

export default function(props) {
  function handleInput(e) {
    // actions.calcFormula(e.target.value);
  }

  function handleKeyup(e) {
    if (e.key === "Enter" && e.target.value.startsWith("=")) {
      if (props.onCalc) props.onCalc(e.target.value.substr(1));
      e.target.blur();
    }
  }

  return (
    <FormulaBarContainer>
      <IconFunction />
      <Divider orientation="vertical" />
      <FormulaInput onInput={handleInput} onKeyUp={handleKeyup} />
    </FormulaBarContainer>
  );
}
