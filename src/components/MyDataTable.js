import React from 'react';
import styled from 'styled-components';
import colors from '../assets/variables.js';
import DataTable, { createTheme } from 'react-data-table-component';


createTheme('customTheme', {
  background: {
    default: colors.black
  },
  divider: {
    default: colors.darkGray
  },
  button: {
    default: colors.lightGray,
    focus: colors.darkGray,
    hover: colors.white,
    disabled: colors.darkGray,
  },
  text: {
    secondary: colors.white
  }
});

const statusColors = [
  colors.darkGray,
  colors.purple300,
  colors.purple200,
  colors.purple100,
  colors.gold
];

const StyledTitle = styled.h2`
  font-size: 24px;
  padding-top: 2em;
`

const Dot = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 1em;
`

const LegislationStatusRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px 25px;
`

const MyDataTable = ({ data }) => {
  const displayData = data.map(d => {
    let res = {
      state: d.state,
      legislation_status: d.color_code_alias,
      color: statusColors[d.color_code],
      source_link: d.source_link,
      current_as_of: d.current_as_of
    };
    return res;
  })

  const columns = Object.keys(displayData[0]).map(d => {
    let res = {
      selector: d,
      name: sentenceCase(d),
      sortable: true
    };
    if (d === "legislation_status") {
      res.cell = row => {
        return (
          <LegislationStatusRow>
            <Dot style={{backgroundColor: row.color}}/>
            <div data-tag="allowRowEvents">{row.legislation_status}</div>
          </LegislationStatusRow>
        )
      }
    }
    if (d === "color") {
      res.omit = true;
    }
    return res;
  });
  console.log(columns);


  return (
    <div>
      <StyledTitle>State Data</StyledTitle>
      <DataTable
        data={displayData}
        columns={columns}
        theme="customTheme"
        selectableRows
        pagination
      />
    </div>
  )
};


function sentenceCase(s) {
  let res = s.split("_");
  res[0] = res[0][0].toUpperCase() + res[0].slice(1);
  return res.join(" ");
}


export default MyDataTable;