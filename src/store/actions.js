export const setGrid = ({state}, grid) => {
  state.grid = grid;
};

export const calcFormula = ({state}, s) => {
  s = s.replace(/[ \t]/g, '');
  const i = s.search(/\(/);
  const fn = s.substr(0, i);
  const args = s.substr(i + 1, s.length - i - 2);
  console.log(fn, args);
};
