import React from 'react';
import { Chart } from "react-google-charts";

const options = {
    region: 'US',
    displayMode: 'regions',
    resolution: 'provinces',
    tooltip: {isHtml: true},
};

const data = [
    ["State", "ColorCode"],
    ["Alabama", 0],
    ["Texas", 2]
  ];
  

const Map = () => {
    return (
        <div className={"map-container"}>
            <Chart
                chartType="GeoChart"
                data={data}
                options={options}
                width="900px"
                height="500px"
            />
        </div>
    );  
} 

export default Map;
