import React, { Component } from 'react';
import { render } from 'react-dom';
import Stopwatch from './Stopwatch';
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
    chrome.devtools.inspectedWindow.eval('console.clear()');
    //chrome.devtools.inspectedWindow.eval('console.log("test12345")');
    var currentdate = new Date().toLocaleTimeString();
    chrome.devtools.inspectedWindow.eval('console.log("from index.jsx ' + currentdate + '")');

    chrome.devtools.inspectedWindow.eval('getObj();', function (obj){
        console.log(obj);
    });
    //console.log(obj);

  }

  render() {

    this.writeToConsole();
    
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
