import React from 'react';
import './App.css';


var responses = [
  {
    "name": "Finneus",
    "image": "https://image.ibb.co/kfFv6e/1.jpg",
    "truth1": "There are 44 different dolphin species.",
    "truth2": "Dolphins typically give birth to one calf.",
    "lie": "Dolphins sleep for several hours at a time."
  },
  {
    "name": "Flipper",
    "image": "https://image.ibb.co/bCmeXK/2.jpg",
    "truth1": "The U.S. Navy trains dolphins to protect nuclear weapons.",
    "truth2": "Dolphins are not the same as porpoises.",
    "lie": "The oldest dolphin in captivity lived to 85 years old."
  },
  {
    "name": "Kelp",
    "image": "https://image.ibb.co/j3Dhme/3.jpg",
    "truth1": "A superpod can consist of more than 1000 dolphins.",
    "truth2": "Dolphins don't use their teeth to chew food.",
    "lie": "In 2001, the Yangtze River dolphin was named functionally extinct."
  },
  {
    "name": "Splash",
    "image": "https://preview.ibb.co/dXCa6e/4.jpg",
    "truth1": "Images of dolphins have been found carved into the desert city of Petra, Jordan.",
    "truth2": "The blowhole of a dolphin is actually an adapted nose.",
    "lie": "Dolphins were thought to be a lot larger hundreds of years ago."
  },
  {
    "name": "Aqua",
    "image": "https://image.ibb.co/fUhKXK/5.jpg",
    "truth1": "Dolphin sonar is the best within nature and superior to bats.",
    "truth2": "Dolphins must tell themselves when to breathe, it's not an automatic response.",
    "lie": "Dolphins don't have livers, but have two gall bladders."
  },
  {
    "name": "Sea(n)",
    "image": "https://image.ibb.co/jM3bCK/7.jpg",
    "truth1": "Dolphins are born with a mustache.",
    "truth2": "Dolphins can talk and understand each other over the phone.",
    "lie": "Baby dolphins are born head-first to prevent drowning."
  },
  {
    "name": "M&M",
    "image": "https://pbs.twimg.com/profile_images/950666351089201152/vFcxX6i9_400x400.jpg",
    "truth1": "One of us is named Maryam",
    "truth2": "One of us is named Madison",
    "lie": "One of us is named Mitch"
  },
]
function randomize(a, b) {
    return Math.random() - 0.5;
}
responses.sort(randomize);

export class Vote extends React.Component {
  constructor(responses){
    super();
    this.state = {
      response_index: 0,
      name: "",
      button_content: [{
        fact: true,
        statement: "",
        percent: "",
      },
      {
        fact: true,
        statement: "",
        percent: "",
      },
      {
        fact: true,
        statement: "",
        percent: "",
      }],
      responses: responses,
    };
  }
  populate = ()=>{
    var buttons = [this.refs.b1,
                  this.refs.b2,
                  this.refs.b3];
    var to_hide = [this.refs.l1,
                  this.refs.l2,
                  this.refs.l3,
                  this.refs.next,
                  this.refs.r1,
                  this.refs.r2,
                  this.refs.r3,
                  this.refs.w1,
                  this.refs.w2,
                  this.refs.w3]
    buttons.forEach(function(button) {
      button.classList.add("unrevealed")
      if (button.classList.contains("revealed")) {
        button.classList.remove("revealed");
      }
      if (button.classList.contains("truth-button")) {
        button.classList.remove("truth-button");
      }
      if (button.classList.contains("lie-button")) {
        button.classList.remove("lie-button");
      }
      if (button.classList.contains("selected")) {
        button.classList.remove("selected");
      }
    })
    to_hide.forEach(function(item) {
      item.classList.add("hidden");
    })
    var lieValue = Math.floor(Math.random() * 40) + 50;
    var truthValue1 = Math.round(((100 - lieValue)/2) + (2 * this.state.response_index));
    var truthValue2 = Math.max((100 - truthValue1 - lieValue),2);
    truthValue1 = 100 - truthValue2 - lieValue;
    var button_content = [{
      fact: true,
      statement: responses[this.state.response_index].truth1,
      percent: (truthValue1).toString() + "%",
    },
    {
      fact: true,
      statement: responses[this.state.response_index].truth2,
      percent: (truthValue2).toString() + "%",
    },
    {
      fact: false,
      statement: responses[this.state.response_index].lie,
      percent: (lieValue).toString() + "%",
    }]
    function randomize(a, b) {
        return Math.random() - 0.5;
    }
    button_content.sort(randomize);
    this.setState({
      name: responses[this.state.response_index].name,
      image: responses[this.state.response_index].image,
      button_content: button_content,
      response_index: (this.state.response_index + 1) % responses.length,
    })
  }

  reveal = ()=>{
    var buttons = [this.refs.b1,
                  this.refs.b2,
                  this.refs.b3];
    var labels = [this.refs.l1,
                  this.refs.l2,
                  this.refs.l3];
    var next = this.refs.next;
    for (var i = 0; i < 3; i++) {
      buttons[i].classList.add("revealed");
      buttons[i].classList.remove("unrevealed");
      var bclass = this.state.button_content[i].fact ? 'truth-button' : 'lie-button';
      buttons[i].classList.add(bclass);
      labels[i].classList.remove("hidden");
    };
    next.classList.remove("hidden");
  }

  b1Click = ()=>{
    if (!(this.refs.b2.classList.contains("selected") | this.refs.b3.classList.contains("selected"))){
      this.refs.b1.classList.add("selected");
      var symbol = this.state.button_content[0].fact ? this.refs.w1 : this.refs.r1;
      symbol.classList.remove("hidden");
    }
    this.reveal();
  }

  b2Click = ()=>{
    if (!(this.refs.b1.classList.contains("selected") | this.refs.b3.classList.contains("selected"))){
      this.refs.b2.classList.add("selected");
      var symbol = this.state.button_content[1].fact ? this.refs.w2 : this.refs.r2;
      symbol.classList.remove("hidden");
    }
    this.reveal();
  }

  b3Click = ()=>{
    if (!(this.refs.b1.classList.contains("selected") | this.refs.b2.classList.contains("selected"))){
      this.refs.b3.classList.add("selected");
      var symbol = this.state.button_content[2].fact ? this.refs.w3 : this.refs.r3;
      symbol.classList.remove("hidden");
    }
    this.reveal();
  }

  componentDidMount() {
    this.populate();
  }
  render() {
    return (
      <div className="container">
        <center>
          <div style={{paddingTop: '20px', paddingBottom:'20px'}}>
            <img src={this.state.image} width="140" height="140" className="profile-image"></img>
            <h3 className="media-heading"> Pick <b>{this.state.name}</b>&#39;s lie</h3>
          </div>
        </center>

          <div className="container">
              <div className="d-flex">
                  <div className="align-self-center"><label ref="l1" >{this.state.button_content[0].percent}</label></div>
                  <div className="flex-grow-1"><button onClick={this.b1Click} type="button" ref="b1" id="b1" className="btn btn-primary btn-lg btn-block unrevealed">{this.state.button_content[0].statement}</button></div>
                  <div className="ml-auto align-self-center" ref="w1" id="w1" style={{paddingLeft:"10px"}}><i className="fas fa-times fa-3x"></i> </div>
                  <div className="ml-auto align-self-center" ref="r1" id="r1" style={{paddingLeft:"10px"}}><i className="fas fa-check fa-3x"></i> </div>
              </div>
          </div>
          <div className="container" style={{paddingTop:"10px"}}>
              <div className="d-flex">
                  <div className="align-self-center"><label ref="l2" >{this.state.button_content[1].percent}</label></div>
                  <div className="flex-grow-1"><button onClick={this.b2Click} type="button" ref="b2" id="b2" className="btn btn-primary btn-lg btn-block unrevealed">{this.state.button_content[1].statement}</button></div>
                  <div className="ml-auto align-self-center" ref="w2" id="w2" style={{paddingLeft:"10px"}}><i className="fas fa-times fa-3x"></i> </div>
                  <div className="ml-auto align-self-center" ref="r2" id="r2" style={{paddingLeft:"10px"}}><i className="fas fa-check fa-3x"></i> </div>
              </div>
          </div>
          <div className="container" style={{paddingTop:"10px"}}>
              <div className="d-flex">
                  <div className="align-self-center"><label ref="l3" >{this.state.button_content[2].percent}</label></div>
                  <div className="flex-grow-1"><button onClick={this.b3Click} type="button" ref="b3" id="b3" className="btn btn-primary btn-lg btn-block unrevealed">{this.state.button_content[2].statement}</button></div>
                  <div className="ml-auto align-self-center" ref="w3" id="w3" style={{paddingLeft:"10px"}}><i className="fas fa-times fa-3x"></i> </div>
                  <div className="ml-auto align-self-center" ref="r3" id="r3" style={{paddingLeft:"10px"}}><i className="fas fa-check fa-3x"></i> </div>
              </div>
          </div>

        <center>
          <div style={{paddingTop:"20px"}}>
            <button onClick={this.populate} ref="next" id="next" style={{height:"10%", width:"15%"}}  className="btn btn-primary" type="submit">Next</button>
          </div>
        </center>

        <script src="vote.js"></script>

      </div>
    );

  }
}
