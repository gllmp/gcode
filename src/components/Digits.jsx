import React from 'react';

let w = window.innerWidth;
let h = window.innerHeight;

let pos;
let speed = 20;

let digits = document.getElementsByClassName("digit");

function glitch() {
  clearInterval(pos);
  
  pos = setInterval(function() {
    for (let i = 0; i < digits.length; i++) {
      digits[i].style.left = Math.floor(Math.random() * w + 1) + "px";
      digits[i].style.top = Math.floor(Math.random() * h + 1) + "px";
    }
  }, speed);
}

class Digits extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount () {
    //let _this = this;

    glitch();

    window.addEventListener("resize", function setSize() {
      w = window.innerWidth;
      h = window.innerHeight;
      
      glitch();
    });
  }

  componentWillUnmount() {

  }

  render() {
    return (        
        <div className="digits-wrapper">
          <div className="digits">
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">0</span>
          </div>
        </div>
    );
  }
}

export default Digits;
