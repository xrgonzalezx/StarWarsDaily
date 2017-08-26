import React, { Component } from "react";
import "../styles/App.css";

class Form extends Component {
  render() {
    return (
      //form to be inserted with <Form/>
                <div className="card form">
                  <div className="card-block">
                    <h2 className="card-title">What is your name, pilot?</h2>
                    <form onSubmit={this.props.handleSubmit}>
                      <div className="form-group">
                        <input className="form-control col-md-4 offset-md-4" id="pilotName" onChange={this.props.handleNameChange} name="name" type="text" value={this.props.pilot} placeholder="Enter your name"/>
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <h1>{this.props.pilot}</h1>
                  </div>
                </div>

    );
  }
}

export default Form;
