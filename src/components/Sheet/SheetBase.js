import React from 'react';
import {MultiGrid} from 'react-virtualized';
import {useOvermind} from 'store';
import {makeStyles} from '@material-ui/core';

const border = '1px solid #c0c0c0';
const borderTopBottom = {
  borderTop: border,
  borderBottom: border,
};
const borderBottomRight = {
  borderBottom: border,
  borderRight: border,
  borderBottomColor: '#ddd',
  borderRightColor: '#ddd'
};

const useStyles = makeStyles({
  'grid': {
    backgroundColor: '#f8f9fa',
  },
  'top-left': {
    '& > div': {
      ...borderTopBottom,
      borderRight: border,
    }
  },
  'bottom-left': {
    '& > div': {
      borderRight: border,
      '& > *': {
        borderBottom: border,
      }
    }
  },
  'top-right': {
    '& > div': {
      ...borderTopBottom,
      '& > *': {
        borderRight: border
      }
    }
  },
  'bottom-right': {
    backgroundColor: '#fff',
    '&:focus': {
      outline: 'none'
    },
    '& > div > *': {
      ...borderBottomRight
    }
  },
});

function SheetBase({width, height}) {
  const {state} = useOvermind();
  const list = [state.sheetHeader];

  const columnCount = list[0].length;

  for (let i = 0; i < state.sheetRowCount; i++) {
    let cols = [i + 1];
    for (let j = 1; j < columnCount; j++) {
      const val = '';
      cols.push(val);
    }
    list.push(cols);
  }

  const classes = useStyles();

  function cellRenderer({columnIndex, key, rowIndex, style}) {
    const s = Object.assign({}, style, {
      lineHeight: `${style.height}px`,
      fontSize: '12px',
      textAlign: 'center'
    });
    return (
      <div key={key} style={s}>
        {list[rowIndex][columnIndex]}
      </div>
    );
  }

  return (
    <MultiGrid
      className={classes['grid']}
      classNameTopLeftGrid={classes['top-left']}
      classNameBottomLeftGrid={classes['bottom-left']}
      classNameTopRightGrid={classes['top-right']}
      classNameBottomRightGrid={classes['bottom-right']}
      cellRenderer={cellRenderer}
      columnWidth={({index}) => index ? 75 : 45}
      columnCount={columnCount}
      fixedColumnCount={1}
      fixedRowCount={1}
      rowHeight={24}
      rowCount={list.length}
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
