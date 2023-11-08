import React from "react";
import "./dataTable.scss";
const DataTable = () => {
  return (
    <div className="dataTable">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default DataTable;
