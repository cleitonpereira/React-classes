import React, { Component } from "react";
import './index.css'

class Cronometro extends Component{

  constructor(props){
    super(props)
    this.state = {
      display: 0,
      startLbl: 'Start'
    }
    this.timer = null;
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
  }

  start(){
    let state = this.state 

    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
      state.startLbl = 'Continue'
    }else{
      this.timer = setInterval(() => {
        let state = this.state
        state.display += 0.01
        this.setState(state)
      }, 10)
      state.startLbl = 'Pause'
    }

    this.setState(state)
    
  }

  stop(){
    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
    }
    let state = this.state
    state.display = 0;
    state.startLbl = 'Start'
    this.setState(state)
  }

  render(){
    return(
      <div className="container">
        <img src={require('../../assets/cronometro.png')} alt="" className="img" />
        <a className="timer">{this.state.display.toFixed(2)/*eslint-disable-line*/}</a>
        <div className="btnArea">
          <a className="btn" onClick={this.start}>{this.state.startLbl/*eslint-disable-line*/}</a>
          <a className="btn" onClick={this.stop/*eslint-disable-line*/}>Stop</a>
        </div>
        
      </div>
    )
  }
}

export default Cronometro