export const setGrid = ({ state }, grid) => {
  state.grid = grid;
};

export const calcFormula = async ({ state, effects }, raw) => {
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

  const data = await effects.invokeService(msg);
  state.sheetData = data;
};
