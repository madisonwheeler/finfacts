import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <html>

      <head>
        <link rel="stylesheet" type="text/css" href="style.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>

        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>

      </head>

      <body>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand">FinFacts</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="vote.html">Vote</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="submit.html">Submit<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Scoreboard</a>
              </li>

            </ul>

          </div>
        </nav>
        <div class="container" style="padding-top:20px">
        <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="name" class="form-control" id="name" placeholder="First Last"></input>
        </div>
        <div class="form-group">
          <label for="truth-one">Truth</label>
          <input type="truth" class="form-control" id="truth-one" placeholder="Enter a fact about yourself!"></input>
          <input type="truth" class="form-control" id="truth-two" placeholder="Enter another fact about yourself!" style= "margin-top:10px"></input>
        </div>
        <div class="form-group">
          <label for="lie">Lie</label>
          <input type="lie" class="form-control" id="lie" placeholder="Enter a lie!"></input>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
      </body>
      </html>

    );
  }
}

export default App;
