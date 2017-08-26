import React, { Component } from "react";
import "../styles/App.css";

class Jumbotron extends Component {
  render() {
    return (
      //jumbotron to be inserted with <jumbotron/>
      <div className="jumbotron">
        <h1 className="display-3">Star Wars</h1 > <hr className="my-4"/>
        < p className = "lead" > The Vehicles of Star Wars < /p>
      </div >
    );
  }
}

export default Jumbotron;
