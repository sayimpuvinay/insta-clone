import React, { Component } from "react";
import './HomePage.css';
import NavBar from "../NavBar/NavBar";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <NavBar />
        nav bar is working
      </div>
    );
  }
}

export default HomePage;
