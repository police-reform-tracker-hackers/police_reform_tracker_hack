import MUIDataTable from 'mui-datatables';
import {Link} from '@material-ui/core'
import React from 'react';


export default function DataTableMUI(props) {
  const data = props.data;
  const columns = props.data.columns.map(d => {
    let res = {name: d};
    if (d === "source_link") {
      res.options = {
          customBodyRender: e => e === "None Found" ? e : (<Link href={e} target="_blank">{e}</Link>)
        }
    }
    return res;
  });
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
