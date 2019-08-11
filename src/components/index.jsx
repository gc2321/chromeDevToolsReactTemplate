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
    this.setState({ startRecordTime: time});
    //console.log('the startRecordTime is ' + this.state.startRecordTime);
    var response = this.executeCode();
    //console.log(response);
    //this.setState({result: [...this.state.results, response]});
    this.setState({result: response});
    console.log(this.state.results.length);
  }

  executeCode() {
    chrome.devtools.inspectedWindow.eval('console.clear()');
    //chrome.devtools.inspectedWindow.eval('console.log("test12345")');
    //var currentdate = new Date().toLocaleTimeString();
    //chrome.devtools.inspectedWindow.eval('console.log("from index.jsx ' + currentdate + '")');
   
    var response = [];
    chrome.devtools.inspectedWindow.eval('getObj();', function (obj) {
      for(var i=0; i < obj.length; i++){
        response[i] = obj[i];  
      }
    });
     return response;  
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
