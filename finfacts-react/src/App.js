import React, { Component } from 'react';
import {NavBar} from './NavBar';
import {Submit} from './Submit';
import {Vote} from './Vote';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        < NavBar />
        < Vote />
      </div>
    );
  }
}

export default App;
