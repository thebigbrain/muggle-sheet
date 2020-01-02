import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  SelectionState,
  PagingState,
  IntegratedPaging,
  IntegratedSelection,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';

import { generateRows } from '../../../demo-data/generator';

export default () => {
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' },
  ]);
  const [rows] = useState(generateRows({ length: 8 }));
  const [selection, setSelection] = useState([]);

  return (
    <div>
      <span>
        Total rows selected:
        {' '}
        {selection.length}
      </span>
      <Paper>
        <Grid
          rows={rows}
          columns={columns}
        >
          <PagingState
            defaultCurrentPage={0}
            pageSize={6}
          />
          <SelectionState
            selection={selection}
            onSelectionChange={setSelection}
          />
          <IntegratedPaging />
          <IntegratedSelection />
          <Table />
          <TableHeaderRow />
          <TableSelection showSelectAll />
          <PagingPanel />
        </Grid>
      </Paper>
    </div>
  );
};
