import React from "react";
import {MultiGrid} from 'react-virtualized';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

function cellRenderer() {
  console.log(arguments);
}

export default function (props) {
  const width = 800;

  return (
    <MultiGrid
      cellRenderer={cellRenderer}
      columnWidth={75}
      columnCount={50}
      fixedColumnCount={1}
      fixedRowCount={1}
      height={300}
      rowHeight={24}
      rowCount={100}
      width={width}
    />
  );
}
