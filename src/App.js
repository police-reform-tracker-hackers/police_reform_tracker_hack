import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Map from './components/Map';
import DataTableMUI from './components/DataTableMUI.js';
import SectionContainer from './sections/SectionContainer.js';
import csvData from './police_reform_tracker_data_hack_1.csv';
import * as d3 from 'd3';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  componentDidMount() {
    // Loading data
    d3.csv(csvData).then((data) => {
      data.forEach(d => {
        d.color_code = +d.color_code;
      });
      if (this.state.data !== data) {
        this.setState({data: data});
      }
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <SectionContainer
          id="map"
          component={this.state.data ? <Map data={this.state.data}/> : <div>Loading map...</div>}
        />
        <hr/>
        <SectionContainer
          id="data"
          component={this.state.data ? <DataTableMUI data={this.state.data}/> : <div>Loading table...</div>}
        />
      </div>
    )
  }
}
