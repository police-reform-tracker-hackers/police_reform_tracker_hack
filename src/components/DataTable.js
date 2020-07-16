import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default class DataTable extends React.Component {
  render() {
    const data = this.props.data;
    const header = data.columns.map((d, i) => {
      if (i === 0) {
        return (<TableCell>{d}</TableCell>)
      } else {
        return (<TableCell align="right">{d}</TableCell>)
      }
    });
    const body = data.map((row) => {
      const cells = data.columns.map((d, i) => {
        if (i === 0) {
          return (<TableCell>{row[d]}</TableCell>)
        } else {
          return (<TableCell align="right">{row[d]}</TableCell>)
        }
      })
      return (
        <TableRow key={row.name}>{cells}</TableRow>
      )
    })
    return (
      <TableContainer component={Paper}>
        <Table aria-label="data table">
          <TableHead>
            <TableRow>{header}</TableRow>
          </TableHead>
          <TableBody>{body}</TableBody>
        </Table>
      </TableContainer>
    );
  }
}
