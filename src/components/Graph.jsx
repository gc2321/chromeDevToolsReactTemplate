import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Graph extends Component {
    constructor() {
        super();
    }

    render() {
        const options = {
            chart: {
                type: "bar"
            },
            title: {
                text: ""
            },
            xAxis: {
                categories: ["A", "B", "C", "D", "E"],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: "",
                    align: "high"
                },
                labels: {
                    overflow: "justify"
                }
            },
            tooltip: {
                valueSuffix: " msec"
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: "",
                    data: [107, 31, 635, 203, 2],
                    showInLegend: false
                }
            ]
        };

        return (
            <div >
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        )
    }
}

export default Graph;