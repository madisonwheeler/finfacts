import React from 'react';

export class Vote extends React.Component {
  render() {
    return (
      <div className="container">
        <center>
          <div style={{paddingTop: '20px', paddingBottom:'20px'}}>
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbezqZpEuwGSvitKy3wrwnth5kysKdRqBW54cAszm_wiutku3R" name="aboutme" width="140" height="140" className="profile-image"></img>
            <h3 className="media-heading"> Pick <b>Joe Sixpack</b>s lie</h3>
          </div>
        </center>

          <div className="container">
              <div className="d-flex">
                  <div className="align-self-center"><label id="l1" hidden>10%</label></div>
                  <div className="flex-grow-1"><button type="button" id="b1" className="btn btn-primary btn-lg btn-block truth-button unrevealed">I often travel to Europe for vacation. I often travel to Europe for vacation. I often travel to Europe for vacation. I often travel to Europe for vacation. I often travel to Europe for vacation. I often travel to Europe for vacation.</button></div>
                  <div className="ml-auto align-self-center" hidden id="w1" style={{paddingLeft:"10px"}}><i className="fas fa-times fa-3x"></i> </div>
                  <div className="ml-auto align-self-center" hidden id="r1" style={{paddingLeft:"10px"}}><i className="fas fa-check fa-3x"></i> </div>
              </div>
          </div>
          <div className="container" style={{paddingTop:"10px"}}>
              <div className="d-flex">
                  <div className="align-self-center"><label id="l1" hidden>10%</label></div>
                  <div className="flex-grow-1"><button type="button" id="b2" className="btn btn-primary btn-lg btn-block lie-button unrevealed">I often travel to Europe for vacation. I often travel to Europe for vacation.</button></div>
                  <div className="ml-auto align-self-center" hidden id="w2" style={{paddingLeft:"10px"}}><i className="fas fa-times fa-3x"></i> </div>
                  <div className="ml-auto align-self-center" hidden id="r2" style={{paddingLeft:"10px"}}><i className="fas fa-check fa-3x"></i> </div>
              </div>
          </div>
          <div className="container" style={{paddingTop:"10px"}}>
              <div className="d-flex">
                  <div className="align-self-center"><label id="l3" hidden>10%</label></div>
                  <div className="flex-grow-1"><button type="button" id="b3" className="btn btn-primary btn-lg btn-block truth-button unrevealed">I often travel to Europe for vacation</button></div>
                  <div className="ml-auto align-self-center" hidden id="w3" style={{paddingLeft:"10px"}}><i className="fas fa-times fa-3x"></i> </div>
                  <div className="ml-auto align-self-center" hidden id="r3" style={{paddingLeft:"10px"}}><i className="fas fa-check fa-3x"></i> </div>
              </div>
          </div>

        <center>
          <div style={{paddingTop:"20px"}}>
            <button id="next" style={{height:"10%", width:"15%"}} hidden className="btn btn-primary fa fa-arrow-right fa-3x" type="submit"></button>
          </div>
        </center>

        <script src="vote.js"></script>

      </div>
    );
  }
}
