import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Submit} from './Submit';
import {Vote} from './Vote';

export class NavBar extends React.Component {
  toSubmit = ()=>{
    this.setState({vote:false});
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">FinFacts</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <button className="btn" onClick={this.toSubmit}>This should go to submit</button>
            <button className="nav-item">
              <a className="nav-link" href="submit.html">Submit<span className="sr-only">(current)</span></a>
            </button>

          </ul>

        </div>
      </nav>
    );
  }
}
