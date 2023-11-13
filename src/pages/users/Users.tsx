import React, { useEffect, useState } from "react";
import "./users.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../data";
import Add from "../../components/add/Add";

import { useQuery } from "@tanstack/react-query";

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
    type: "string",
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
  const [open, setOpen] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8800/api/users");
      return res.json();
    },
  });

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable
          slug="users"
          columns={columns}
          rows={data === undefined ? userRows : data}
        />
      )}
      {open && <Add setOpen={setOpen} slug="user" columns={columns} />}
    </div>
  );
};

export default Users;
