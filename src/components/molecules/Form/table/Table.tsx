// Import necessary modules
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DataGrid as MuiDataGrid } from '@mui/x-data-grid';
import { CssBaseline } from '@mui/material';
import React from 'react';

// Define your custom theme with DataGrid style overrides
const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: 0,
          color: theme.palette.text.primary,
          '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within': {
            outline: 'none',
          },
        }),
        toolbarContainer: ({ theme }) => ({
          paddingRight: `${theme.spacing(5)} !important`,
          paddingLeft: `${theme.spacing(3.25)} !important`,
        }),
        columnHeaders: ({ theme }) => ({
          backgroundColor: '#f5f5f7',
        }),
        columnHeader: ({ theme }) => ({
          '&:not(.MuiDataGrid-columnHeaderCheckbox)': {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            '&:first-of-type': {
              paddingLeft: theme.spacing(2),
            },

          },
          '&:last-of-type': {
            paddingRight: theme.spacing(2),
          },
          backgroundColor: '#f5f5f7',

        }),
        columnHeaderCheckbox: {
          maxWidth: '58px !important',
          minWidth: '58px !important',
        },
        columnHeaderTitleContainer: {
          padding: 0,
          display:"flex",
        //   justifyContent:"flex-end"
        },
        columnHeaderTitle: {
          fontSize: '0.75rem',
          letterSpacing: '0.17px',
          textTransform: 'uppercase'
        },
        columnSeparator: ({ theme }) => ({
          color: theme.palette.divider,
        }),
        row: {
          '&:last-child': {
            '& .MuiDataGrid-cell': {
              borderBottom: 0,
            },
          },
        },
        cell: ({ theme }) => ({
          borderColor: theme.palette.divider,
          '&:not(.MuiDataGrid-cellCheckbox)': {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            '&:first-of-type': {
              paddingLeft: theme.spacing(2),
            },
            display:"flex"
          },
          '&:last-of-type': {
            paddingRight: theme.spacing(2),
          },
          '&:focus, &:focus-within': {
            outline: 'none',
          },
        }),
        cellCheckbox: {
          maxWidth: '58px !important',
          minWidth: '58px !important',
        },
        editInputCell: ({ theme }) => ({
          padding: 0,
          color: theme.palette.text.primary,
          '& .MuiInputBase-input': {
            padding: 0,
          },
        }),
        footerContainer: ({ theme }) => ({
          borderTop: `1px solid ${theme.palette.divider}`,
          '& .MuiTablePagination-toolbar': {
            paddingLeft: `${theme.spacing(2)} !important`,
            paddingRight: `${theme.spacing(2)} !important`,
          },
          '& .MuiTablePagination-select': {
            color: theme.palette.text.primary,
          },
        }),
        selectedRowCount: ({ theme }) => ({
          margin: 0,
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
        }),
      },
    },
  },
});

type Table_TP = {
  rows: Array<any>;
  columns: Array<any>;
};

function Table({ rows, columns }: Table_TP) {
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
      <div>
        <MuiDataGrid
          autoHeight
          rows={rows}
          columns={columns.map(column => ({ ...column, flex: 1 }))}
          slots={{ noRowsOverlay: 'CustomNoRowsOverlay' }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 15,
              },
            },
          }}
          pageSizeOptions={[15]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </ThemeProvider>
  );
}

export default Table;
