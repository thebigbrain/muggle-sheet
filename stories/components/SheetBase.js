import React from "react";
import { MultiGrid } from "react-virtualized";
import { makeStyles } from "@material-ui/core";

import "react-datasheet/lib/react-datasheet.css";

const border = "1px solid #c0c0c0";
const borderTopBottom = {
  borderTop: border,
  borderBottom: border
};
const borderBottomRight = {
  borderBottom: border,
  borderRight: border,
  borderBottomColor: "#ddd",
  borderRightColor: "#ddd"
};

const useStyles = makeStyles({
  grid: {
    backgroundColor: "#f8f9fa"
  },
  "top-left": {
    "& > div": {
      ...borderTopBottom,
      borderRight: border
    }
  },
  "bottom-left": {
    "& > div": {
      borderRight: border,
      "& > *": {
        borderBottom: border
      }
    }
  },
  "top-right": {
    "& > div": {
      ...borderTopBottom,
      "& > *": {
        borderRight: border
      }
    }
  },
  "bottom-right": {
    backgroundColor: "#fff",
    "&:focus": {
      outline: "none"
    },
    "& > div > *": {
      ...borderBottomRight
    }
  }
});

function SheetBase({ width, height, data }) {
  const classes = useStyles();
  const rowCount = data.length;
  const columnCount = data[0].length;

  function cellRenderer({ columnIndex, key, rowIndex, style }) {
    const s = Object.assign({}, style, {
      lineHeight: `${style.height}px`,
      fontSize: "12px",
      textAlign: "center",
      padding: "0 .5em",
      overflow: "hidden"
    });

    const v = data[rowIndex][columnIndex];

    return (
      <div key={key} style={s}>
        {v == null ? "" : v}
      </div>
    );
  }

  return (
    <MultiGrid
      className={classes["grid"]}
      classNameTopLeftGrid={classes["top-left"]}
      classNameBottomLeftGrid={classes["bottom-left"]}
      classNameTopRightGrid={classes["top-right"]}
      classNameBottomRightGrid={classes["bottom-right"]}
      cellRenderer={cellRenderer}
      columnWidth={({ index }) => (index ? 100 : 45)}
      columnCount={columnCount}
      fixedColumnCount={1}
      fixedRowCount={1}
      rowHeight={24}
      rowCount={rowCount}
      width={width}
      height={height}
      enableFixedColumnScroll
      enableFixedRowScroll
      hideTopRightGridScrollbar
      hideBottomLeftGridScrollbar
    />
  );
}

export default SheetBase;
