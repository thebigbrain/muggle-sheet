export const setGrid = ({ state }, grid) => {
  state.grid = grid;
};

export const updateGrid = ({ state }, partial = {}) => {
  const data = [].concat(state.sheetData);
  for (let k in partial) {
    let [i, j] = k.split(",");
    i = parseInt(i);
    j = parseInt(j);
    data[i][j] = partial[k];
  }
  state.sheetData = data;
};

export const calcFormula = async ({ state, effects, actions }, raw) => {
  raw = raw.replace(/[ \t]/g, "");
  const i = raw.search(/\(/);
  const fn = raw.substr(0, i);
  const args = raw.substr(i + 1, raw.length - i - 2);

  const ret = "A1";
  const workbook = "";
  const sheet = "";
  const msg = {
    ret,
    fn,
    args,
    raw,
    workbook,
    sheet
  };

  let data = await effects.api.invokeService("excel.fx", msg);
  actions.updateGrid(data);
};

export const updateSheet = ({ state, actions }) => {
  const list = [state.sheetHeader];
  const rowCount = state.sheetRowCount;
  const columnCount = state.sheetHeader.length;

  for (let i = 0; i < rowCount; i++) {
    let cols = [i + 1];
    for (let j = 1; j < columnCount; j++) {
      const val = "";
      cols.push(val);
    }
    list.push(cols);
  }

  state.sheetData = list;

  actions.updateGrid();
};
