import React from "react";
import "./users.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../data";

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
    field: "name",
    headerName: "이름",
    width: 150,
    editable: true,
  },
  // {
  //   field: "actions",
  //   headerName: "관리",
  //   width: 100,
  //   renderCell: (params) => {
  //     return (
  //       <div className="action">
  //         <div className="view">View</div>
  //         <div className="delete">Delete</div>
  //       </div>
  //     );
  //   },
  // },
  {
    field: "email",
    headerName: "email",
    width: 300,
    editable: true,
  },
  {
    field: "phone",
    headerName: "phone",
    width: 150,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "createdAt",
    width: 200,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    type: "boolean",
  },

  // {
  //   field: "age",
  //   headerName: "나이",
  //   type: "number",
  //   width: 110,
  //   renderCell: (params) => {
  //     return params.value || "ㅡ";
  //   },
  //   editable: true,
  // },
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

const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
    </div>
  );
};

export default Users;
