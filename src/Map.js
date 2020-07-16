import React from 'react';
import { Chart } from 'react-google-charts';
import * as d3 from 'd3';
import csvData from './police_reform_tracker_data_hack_1.csv';

const options = {
    region: 'US',
    displayMode: 'regions',
    resolution: 'provinces',
    tooltip: {isHtml: true},
};

const dataColumns = [
    {
        type: "string",
        label: "State",
    },
    {
        type: "number",
        label: "Color Code"
    }, 
];

const Map = () => {
    const [dataRows, setDataRows] = React.useState([]);
    React.useEffect(() => {
        d3.csv(csvData, function(csvData) { 
            const rows = csvData.map(obj => [
                obj.state, 
                Number(obj.color_code), 
            ]);
            setDataRows(rows);
        });
    }, [])
    return (
        <div style={{margin: "0 auto"}} className={"map-container"}>
            <Chart
                chartType="GeoChart"
                columns={dataColumns}
                rows={dataRows}
                options={options}
                width="900px"
                height="500px"
                legendToggle
            />
        </div>
    );  
} 

export default Map;
