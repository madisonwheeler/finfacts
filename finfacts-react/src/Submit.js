import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Submit extends React.Component {
  render() {
    return (
      <div className="container" style = {{ paddingTop : '20px'}} >

      <form>
      <div className="form-group">
        <label style = {{fontSize : '30px'}} htmlFor="name">Name</label>
        <input type="name" className="form-control" id="name" placeholder="First Last"></input>
      </div>
      <div className="form-group">
        <label style = {{fontSize : '30px'}} htmlFor="truth-one">Truth</label>
        <input type="truth" className="form-control" id="truth-one" placeholder="Enter a fact about yourself!"></input>
    <input type="truth" className="form-control" id="truth-two" placeholder="Enter another fact about yourself!" style= {{marginTop:'10px'}}></input>
      </div>
      <div className="form-group">
        <label style = {{fontSize : '30px'}} htmlFor="lie">Lie</label>
        <input type="lie" className="form-control" id="lie" placeholder="Enter a lie!"></input>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    </div>
    );
  }
}
