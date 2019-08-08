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
                type: 'spline'
            },
            title: {
                text: 'My chart'
            },
            series: [
                {
                    data: [1, 2, 1, 4, 3, 6]
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