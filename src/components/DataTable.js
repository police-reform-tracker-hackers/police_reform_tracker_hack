import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default class DataTable extends React.Component {
  const classes = useStyles();
  const data = this.props.data;
  const header = data.columns.map(((d, i) => {(
              if (i === 0) {
                return <TableCell>{d}</TableCell>
              } else {
                return <TableCell align="right">{d}</TableCell>
              }
              <TableCell>{d}</TableCell>
            )}));
  const body = data.map((row) => {
    return (
      <TableRow key={row.name}>
        data.columns.map((d, i) => {
          if (i === 0) {
            return <TableCell>{d}</TableCell>
          } else {
            return <TableCell align="right">{d}</TableCell>
          }
      </TableRow>
    )
    })
  });
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>{header}</TableRow>
        </TableHead>
        <TableBody>{body}</TableBody>
      </Table>
    </TableContainer>
  );
}
