import React, { Component } from 'react';
import { render } from 'react-dom';
import Stopwatch from './Stopwatch';
import Graph from './Graph';

class App extends Component {
  constructor() {
    super();
    this.state = { startTime: 0, startRecordTime: 0, results: [] }
  }

  componentDidMount() {
    this.setState({ startTime: 0 });
  }

  onFinishRecording(time) {
    this.setState({ startRecordTime: time });
    //console.log('the startRecordTime is ' + this.state.startRecordTime);
    this.executeCode();
  }

  executeCode() {
    chrome.devtools.inspectedWindow.eval('console.clear()');
    //chrome.devtools.inspectedWindow.eval('console.log("test12345")');
    //var currentdate = new Date().toLocaleTimeString();
    //chrome.devtools.inspectedWindow.eval('console.log("from index.jsx ' + currentdate + '")');

    let that = this;
    chrome.devtools.inspectedWindow.eval('getObj();', function (obj) {
      let response = obj.slice(0);
      that.setState({results : response});
    });
  }

  render() {

    const { results } = this.state;
    console.log('array length in render is ' + results.length);
   
    return (
      <div className="ui container">
        <br />
        <center>
          <div className="ui compact segment">
            <Stopwatch onFinishRecording={this.onFinishRecording.bind(this)} />
          </div>
        </center>

        {
          results.length != 0 ? <Graph data={results}/>: null         
        }

      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
);
