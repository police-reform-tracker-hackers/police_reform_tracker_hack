import MUIDataTable from 'mui-datatables';
import React from 'react';


export default function DataTableMUI(props) {
  const data = props.data;
  const columns = props.data.columns;
  const options = {
    filterType: 'checkbox',
    pagination: false,
    fixedHeader: true,
    responsive: "scroll"
  }

  return (
    <MUIDataTable
      title={"Raw data"}
      data={data}
      columns={columns}
      options={options}
    />
  )
}
