import React, { Component } from "react";
import './MainContent.css';
//import NavBar from "../NavBar/NavBar";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Hello, I'm from MainContent. if u r seeing this, then maincontent is working fine</h1>
      </div>
    );
  }
}

export default MainContent;
