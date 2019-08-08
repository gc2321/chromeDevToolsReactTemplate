import React, { Component } from 'react';
import { render } from 'react-dom';
import Stopwatch from './Stopwatch';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
import Graph from './Graph';

class App extends Component {
  constructor() {
    super();
    this.state = { startTime: 0, startRecordTime: 0 }
  }

  componentDidMount() {
    this.setState({ startTime: 0 });
  }

  onFinishRecording(time) {
    this.setState({ startRecordTime: time });
  }

  writeToConsole() {
    //chrome.devtools.inspectedWindow.eval('console.clear()');
    chrome.devtools.inspectedWindow.eval('console.log("test12345")');
    var currentdate = new Date().toLocaleTimeString();

    chrome.devtools.inspectedWindow.eval('console.log("from index.jsx' + currentdate + '")');

  }

  render() {

    this.writeToConsole();
    // const options = {
    //   chart: {
    //       type: 'spline'
    //   },
    //   title: {
    //       text: 'My chart'
    //   },
    //   series: [
    //       {
    //           data: [1, 2, 1, 4, 3, 6]
    //       }
    //   ]
    //};
    return (
      <div className="ui container">
        <br />
        <center>
          <div className="ui compact segment">
            <Stopwatch onFinishRecording={this.onFinishRecording.bind(this)} />
          </div>
          <div className="ui container">
          <Graph data={[]} />
          </div>
        </center>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
);
