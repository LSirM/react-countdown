import React, { Component } from 'react';
import './App.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      deadline: 'Countdown to December, 25, 2017'
    }
  }

  changeDeadline(){
    this.setState({deadline: 'Contador para 25 de Dezembro de 2017'})
  }

  render(){
    return(
      <div className="app">
        <div className="app-title">{this.state.deadline}</div>
          <div>
            <div className="clock-days">14 days</div>
            <div className="clock-hours">30 hours</div>
            <div className="clock-minutes">15 minutes</div>
            <div className="clock-seconds">20 seconds</div>
          </div>
        <input placeholder="new date"/>
        <button onClick={() => this.changeDeadline()}>Submit</button>
      </div>
    )
  }
}

export default App;