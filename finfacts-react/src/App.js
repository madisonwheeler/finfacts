import React, { Component } from 'react';
import {NavBar} from './NavBar';
import {Submit} from './Submit';
import {Vote} from './Vote';
//import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      vote: true
    }
  }
  toSubmit = ()=>{
    this.setState({vote:false});
  }
  toVote = ()=>{
    this.setState({vote:true});
  }
  render() {
    let content;
    if (this.state.vote) {
      content = <Vote />
    }
    else {
      content = <Submit />
    }
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">FinFacts</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <button className="btn nav-button" onClick={this.toVote}>Vote</button>
          <button className="btn nav-button" onClick={this.toSubmit} >Submit</button>


          </ul>

        </div>
      </nav>
        {content}
      </div>
    );
  }
}

export default App;
