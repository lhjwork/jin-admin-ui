import React from "react";
import "./dataTable.scss";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridValueGetterParams,
} from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "avatar",
    headerName: "프로필",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "actions",
    headerName: "관리",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="action">
          <div className="view">View</div>
          <div className="delete">Delete</div>
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    type: "boolean",
  },
  {
    field: "name",
    headerName: "이름",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "나이",
    type: "number",
    width: 110,
    renderCell: (params) => {
      return params.value || "ㅡ";
    },
    editable: true,
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

const rows = [
  { id: 1, name: "Snow Jon", age: 35, status: true },
  { id: 2, name: "이해준", age: 42, status: false },
  { id: 3, name: "Lannister Jaime", age: 45 },
  { id: 4, name: "김상준", age: 16 },
  { id: 5, name: "Targaryen", age: null },
  { id: 6, name: "Melisandre", age: 150 },
  { id: 7, name: "김동원", age: 44 },
  { id: 8, name: "Frances", age: 36 },
  { id: 9, name: "김명진", age: 65 },
];
const DataTable = () => {
  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        // 검색 기능 : slotProps
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
