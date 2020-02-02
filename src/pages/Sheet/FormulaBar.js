import React from "react";
import {Divider} from "@material-ui/core";
import {FormulaBarContainer, FormulaInput} from "components/elements";
import {IconFunction} from 'components/icons';
import {useOvermind} from 'store';

export default function (props) {
  const {actions} = useOvermind();

  function handleInput(e) {
    // actions.calcFormula(e.target.value);
  }

  function handleKeyup(e) {
    if (e.key === 'Enter' && e.target.value.startsWith('=')) {
      actions.calcFormula(e.target.value.substr(1));
      e.target.blur();
    }
  }

  return (
    <FormulaBarContainer>
      <IconFunction/>
      <Divider orientation="vertical" />
      <FormulaInput onInput={handleInput} onKeyUp={handleKeyup}/>
    </FormulaBarContainer>
  );
}
