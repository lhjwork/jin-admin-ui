import "./dataTable.scss";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";
type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};
//21759
const DataTable = (props: Props) => {
  // const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: number) => {
      return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
        method: "delete",
      });
    },
    onSuccess: () => {
      console.log("queryClient.invalidateQueries");
      // queryClient.invalidateQueries([`all${props.slug}`]);
    },
  });

  const handleDelete = (id: number) => {
    mutation.mutate(id);
    console.log(id + "han been deleted");
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
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
