import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
import NavBar from './components/NavBar.js';
import Map from './components/Map';
import DataTableMUI from './components/DataTableMUI.js';
import MarkdownText from './components/MarkdownText.js';
import SectionContainer from './sections/SectionContainer.js';
import Contact from './sections/Contact.js';
import csvData from './police_reform_tracker_data_hack_1.csv';
import * as d3 from 'd3';
import SubmitUpdateForm from './components/SubmitUpdateForm';
import {Typography} from '@material-ui/core';
import mission from './text/mission.md';
import takeaction from './text/takeaction.md';


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
          sectionTitle="See the data for yourself"
          component={this.state.data ? <DataTableMUI data={this.state.data}/> : <div>Loading table...</div>}
        />
        <SectionContainer
          id="form"
          component={<SubmitUpdateForm/>}
        />
        <hr/>
        <SectionContainer
          id="takeaction"
          backgroundColor="lightgray"
          component={<MarkdownText title={"Take Action Now"} file={takeaction}/>}
        />
        <SectionContainer
          id="mission"
          component={<MarkdownText title={"Mission"} file={mission}/>}
        />
        <SectionContainer
          id="contact"
          backgroundColor="lightGray"
          component={<Contact/>}
        />
      </div>
    )
  }
}
