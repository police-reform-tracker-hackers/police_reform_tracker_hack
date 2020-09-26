import MUIDataTable from 'mui-datatables';
import {Link, Typography} from '@material-ui/core'
import React from 'react';
import styles from './DataTableMUI.css'


export default function DataTableMUI(props) {
  const data = props.data;
  const columns = props.data.columns.map(d => {
    let res = {name: d, label: sentenceCase(d)};
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
    <div>
      <MUIDataTable
        data={data}
        columns={columns}
        options={options}
        className="test-class"
      />
    </div>
  )
}

function sentenceCase(s) {
  let res = s.split("_");
  res[0] = res[0][0].toUpperCase() + res[0].slice(1);
  return res.join(" ");
}
