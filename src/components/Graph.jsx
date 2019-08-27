import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import highchartsGantt from "highcharts/modules/gantt";
import HighchartsMore from 'highcharts/highcharts-more';
highchartsGantt(Highcharts);
HighchartsMore(Highcharts);

class Graph extends Component {
    constructor() {
        super();
    }

    render() {
        let options = {
            chart: {
                type: "bar"
            },
            title: {
                text: ""
            },
            xAxis: {
                categories: [],
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
                    data: [],
                    showInLegend: false
                }
            ]
        };

        // let data = this.props.data;
        // let categories = [];
        // let values = [];

        // if (data != null) {
        //     data.forEach(function (item, i) {
        //         categories[i] = item.name;
        //         values[i] = item.value;
        //     });
        // }

        // options.xAxis.categories = categories;
        // options.series[0].data = values;

        // options = {
        //     chart: {
        //         events: {
        //             load: function () {
        //                 var chart = this,
        //                     series = chart.series[0];

        //                 series.points.forEach(function (point) {
        //                     point.graphic.translate(0, -25);
        //                 });
        //             }
        //         }
        //     },
        //     plotOptions: {
        //         series: {
        //             pointWidth: 15
        //         }
        //     },
        //     yAxis: {
        //         categories: ['Resource 1', 'Resource 2', 'Resource 3'],
        //         breaks: [{
        //             breakSize: 3,
        //             from: 0,
        //             to: 0
        //         }]
        //     },
        //     plotOptions: {
        //         bar: {
        //             dataLabels: {
        //                 enabled: true
        //             }
        //         }
        //         series: {
        //             stacking: 'normal'
        //         }
        //     },
        //     series: [{
        //         name: 'Resource 1',
        //         data: [{
        //             name: 'Task A',
        //             y: 0,
        //             start: 5,
        //             end: 25
        //         }, {
        //             name: 'Task B',
        //             y: 0,
        //             start: 3,
        //             end: 17
        //         }, {
        //             name: 'Task C',
        //             y: 0,
        //             start: 13,
        //             end: 29
        //         }]
        //     }, {
        //         name: 'Resource 2',
        //         data: [{
        //             name: 'Task D',
        //             y: 1,
        //             start: 2,
        //             end: 22
        //         }, {
        //             name: 'Task E',
        //             y: 1,
        //             start: 13,
        //             end: 25
        //         }, {
        //             name: 'Task F',
        //             y: 1,
        //             start: 19,
        //             end: 29
        //         }]
        //     }, {
        //         name: 'Resource 3',
        //         data: [{
        //             name: 'Task H',
        //             y: 2,
        //             start: 4,
        //             end: 23
        //         }, {
        //             name: 'Task I',
        //             y: 2,
        //             start: 15,
        //             end: 27
        //         }, {
        //             name: 'Task J',
        //             y: 2,
        //             start: 34,
        //             end: 39
        //         }]
        //     }]
        // };

        options = {

            chart: {
                type: 'columnrange',
                inverted: true
            },
        
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
        
            yAxis: {
                title: {
                    text: 'Temperature ( °C )'
                }
            },
        
            tooltip: {
                valueSuffix: 'C'
            },
        
            plotOptions: {
                columnrange: {
                    dataLabels: {
                        enabled: true,
                        format: '{y}°C'
                    }
                }
            },
        
            legend: {
                enabled: false
            },
        
            series: [{
                name: 'Temperatures',
                data: [
                    [-9.9, 10.3],
                    [-8.6, 8.5],
                    [-10.2, 11.8],
                    [-1.7, 12.2],
                    [-0.6, 23.1],
                    [3.7, 25.4],
                    [6.0, 26.2],
                    [6.7, 21.4],
                    [3.5, 19.5],
                    [-1.3, 16.0],
                    [-8.7, 9.4],
                    [-9.0, 8.6]
                ]
            },
            {
                name: 'Values',
                data: [
                    [7, 10.3],
                    [5, 8.5],
                    [10.2, 11.8],
                    [1.7, 12.2],
                    [11, 23.1],
                    [3.7, 25.4],
                    [21, 26.2],
                    [3, 21.4],
                    [3.5, 19.5],
                    [5, 16.0],
                    [0, 9.4],
                    [2, 8.6]
                ]
            }
        
        ]
        
        };


        return (
            <div className='ui segment'>
                <HighchartsReact highcharts={Highcharts} options={options} />
                {/* <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={"ganttChart"}
                    options={options} /> */}
            </div>
        )
    }
}

export default Graph;