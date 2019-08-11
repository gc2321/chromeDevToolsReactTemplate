import React, { Component } from 'react';

class Stopwatch extends Component {
    constructor() {
        super();
        this.state = { isOn: false, startRecordTime: 0, time: 0 }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    resetTimer() {
        clearInterval(this.timer);
        this.setState({ isOn: false, time: 0 });
        this.props.onReset();
    }

    handleStartRecording() {
        this.props.onReset();
        this.setState({ isOn: true, startRecordTime: Date.now() });
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.startRecordTime
        }), 1);
    }

    handleStopRecording() {
        clearInterval(this.timer);
        this.setState({ isOn: false, time: Date.now() - this.state.startRecordTime });
        this.props.onFinishRecording(this.state.startRecordTime);
    }

    render() {
        const { isOn, time } = this.state;
        const timeInSec = (time / 100) / 10;

        return (
            <div >
                <span className="ui basic label">
                    {timeInSec.toFixed(1)}
                </span>&nbsp;&nbsp;&nbsp;&nbsp;

                {isOn ?
                    <button className='tiny ui red button' onClick={this.handleStopRecording.bind(this)}>Stop</button> :
                    <button className='tiny ui olive button' onClick={this.handleStartRecording.bind(this)}>Start</button>
                }
                {isOn ? null : <button className='tiny ui grey button' onClick={this.resetTimer.bind(this)}>Reset</button>}
            </div>
        )
    }
}

export default Stopwatch;