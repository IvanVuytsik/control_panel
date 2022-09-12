import React, { useState } from 'react'
import "./datatable.scss";
import { DataGrid, GRID_CHECKBOX_SELECTION_COL_DEF  } from '@mui/x-data-grid';
import { userColumns, userRows } from "./datasource.js";
import  { Link } from "react-router-dom";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  }

  const actionColumn = [
      { field: "action", headername: "Action", width: 200, 
        renderCell:(params)=>{

        return (
            <div className="cellAction">
              <Link to="/users/test">
                <div className="viewButton">View</div>
              </Link> 
              <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
            </div>  
        )
    }}];

  return (
    <div className="datatable" style={{ height: 600, width: '100%'}}>
      <div className="dataTableTitle">
          Add New User
          <Link to="/users/new" className='link'>
            Add New
          </Link> 
      </div>
      <DataGrid className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
       // checkboxSelection
      />
    </div>
  )
}

export default Datatable