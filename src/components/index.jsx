import React, { Component } from 'react';
import { render } from 'react-dom';
import Stopwatch from './Stopwatch';

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
    chrome.devtools.inspectedWindow.eval('console.log("test12345")');
    var currentdate = new Date().toLocaleTimeString();
   
    chrome.devtools.inspectedWindow.eval('console.log("' + currentdate + '")');

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
        </center>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
);
