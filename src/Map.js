import React from 'react';
import { Chart } from 'react-google-charts';
import * as d3 from 'd3';
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

export default function Map(props) {
    const [mapData, setMapData] = React.useState([]);
    const [csvInfo, setCSVInfo] = React.useState([]);
    React.useEffect(() => {
        const cols = [["x", "y", { role: "tooltip", type: "string", p: { html: true } }]];
        const rows = props.data.map(obj => [
            obj.state,
            obj.color_code,
            createTooltipContent(obj.color_code_alias, obj.source_link, obj.current_as_of),
        ]);
        setMapData(cols.concat(rows));
        setCSVInfo(props.data);
    }, [])
    return (

            <Chart
                chartType="GeoChart"
                data={mapData}
                options={options}
                height='700px'
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
    );
}
