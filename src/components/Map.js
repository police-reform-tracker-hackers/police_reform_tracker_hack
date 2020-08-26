import React from 'react';
import { Chart } from 'react-google-charts';
import './Map.css';

const options = {
    region: 'US',
    displayMode: 'regions',
    resolution: 'provinces',
    tooltip: {isHtml: true},
    legend: 'none',
};

const createTooltipContent = (status, link, date) => {
    return '<div>'
        +'<p>' +status +'</p>'
        +'<p>' +date +'</p>'
    + '</div>';
};

export default function Map(props) {
    const [mapData, setMapData] = React.useState([]);
    const [csvInfo, setCSVInfo] = React.useState([]);

    const legendInfo = [
        ["No Action Taken Yet", "rgb(239, 230, 220)"],
        ["Commitment to Act", "rgb(165, 205, 155)"],
        ["Bill in Progress", "rgb(90, 177, 89)"],
        ["Bill Passed", "rgb(16, 150, 24)"],
    ];

    React.useEffect(() => {
        const cols = [["State", "Color", { role: "tooltip", type: "string", p: { html: true } }]];
        const rows = props.data.map(obj => [
            obj.state,
            obj.color_code,
            createTooltipContent(obj.color_code_alias, obj.source_link, obj.current_as_of),
        ]);
        setMapData(cols.concat(rows));
        setCSVInfo(props.data);
    }, [props.data]);

    return (
        <div className={"map-container"}>
            <Chart
                chartType="GeoChart"
                data={mapData}
                options={options}
                legendToggle
                width="90vw"
                height="40vw"
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
            <div className={'map-legend'}>
                <ul>
                    {legendInfo.map(item => (
                        <li key={item[0]}>
                            <div style={{backgroundColor: item[1]}}></div>
                            {item[0]}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
