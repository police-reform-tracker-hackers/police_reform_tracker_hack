import React from 'react';
import { Chart } from 'react-google-charts';
import * as d3 from 'd3';
import csvData from './police_reform_tracker_data_hack_1.csv';
import { select } from 'd3';

const options = {
    region: 'US',
    displayMode: 'regions',
    resolution: 'provinces',
    tooltip: {isHtml: true},
};

const createTooltipContent = (status, link, date) => {
    return '<div>'
        +'<p>' +status +'</p>'
        +'<p>' +date +'</p>'
        +'<p>' +link +'</p>'
    + '</div>';
};

const Map = () => {
    const [mapData, setMapData] = React.useState([]);
    const [csvInfo, setCSVInfo] = React.useState([]);
    React.useEffect(() => {
        d3.csv(csvData).then(function(csvData) {
            console.log(csvData);
            const cols = [["x", "y", { role: "tooltip", type: "string", p: { html: true } }]];
            const rows = csvData.map(obj => [
                obj.state,
                Number(obj.color_code),
                createTooltipContent(obj.color_code_alias, obj.source_link, obj.current_as_of),
            ]);
            setMapData(cols.concat(rows));
            setCSVInfo(csvData);
        });
    }, [])
    return (
        <div style={{margin: "0 auto"}} className={"map-container"}>
            <Chart
                chartType="GeoChart"
                data={mapData}
                options={options}
                width="900px"
                height="500px"
                legendToggle
                chartEvents={[
                    {
                      eventName: "select",
                      callback: ({ chartWrapper }) => {
                        const selection = chartWrapper.getChart().getSelection();
                        if (selection.length === 0) return;
                        const articleURL = csvInfo[selection[0].row].source_link;
                        if (articleURL !== "None Found")
                            window.open(articleURL, '_blank');
                      }
                    }
                  ]}
            />
        </div>
    );
}

export default Map;
