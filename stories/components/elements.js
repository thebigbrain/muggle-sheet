import styled from "styled-components";

export const StyledSheet = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const StyledCell = styled.div`
  display: inline-block;
  box-sizing: border-box;
  font-size: 12px;
  padding: 0 8px;
  line-height: 24px;
  border-right: 1px solid #aaa;
`;

export const StyledHeader = styled.div`
  width: calc(100% - 46px);
  overflow: hidden;
`;

export const FormulaBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 24px;
  box-sizing: border-box;
  padding: 3px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;

  > * {
    margin: 0 15px;
  }
`;

export const FormulaInput = styled.input`
  flex-grow: 1;
  border: 0;
  letter-spacing: 1px;

  &:focus {
    outline: none;
  }
`;
