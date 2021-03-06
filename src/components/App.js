import React, {Component} from 'react';
import '../styles/App.css';


import Jumbotron from "./Jumbotron";
import Form from "./Form";
import Vehicles from "./Vehicles";


class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    vehicles: [],
    value: '',
    pilot: ''
  };
  this.handleNameChange = this.handleNameChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleNameChange(event){
  console.log(event.target.value);
this.setState({
  pilot: event.target.value
 })
}

handleSubmit(event){
  event.preventDefault()
    this.setState({
        pilot: this.state.pilot,
        value: ""
      })
    }

    componentDidMount() {
console.log("vehicles api working here");
      fetch('https://swapi.co/api/vehicles/')
      .then(response => response.json() )
      .then((json) => {
        console.log("Data from componentDidMount fetch", json)
//setting the fetched json to setState to hold the data to be used later
        this.setState({
          vehicles: json.results})
      })
    }

    render() {

  return (
        <div className="App">
          <Jumbotron/>
          {/* there are 3 things to be concerend or (*handle*) with when rendering in Form file*/}
          <Form handleSubmit={this.handleSubmit}
                handleNameChange={this.handleNameChange}
                pilot={this.state.pilot}/>
          {/*there is one thing to be concerend or (*this.state.vehicles*) with when rendering in vehicles*/}
          <Vehicles vehicles={this.state.vehicles}/>
        </div>
         );
    }
}

    export default App;

  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  // class App extends Component {
  //   constructor(props) {
  //     super(props);
  //
  //     this.state = {
  //       commentText: '',
  //       name: '',
  //       comments: [],
  //       nasa: {},
  //     };
  //
  //     this.handleCommentTextChange = this.handleCommentTextChange.bind(this);
  //     this.handleNameChange = this.handleNameChange.bind(this);
  //     this.handleFormSubmit = this.handleFormSubmit.bind(this);
  //   }



  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
  // handleNameChange(event){
  //   this.setState({
  //     name: event.target.value
  //   })
  // }




  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  // handleFormSubmit(event){
  //   event.preventDefault()
  //   const newComment = {
  //     comment: this.state.commentText,
  //     author: this.state.name
  //   }
  //   const comments = this.state.comments;
  //   comments.push(newComment)
  //
  //   this.setState({
  //     comments: comments,
  //     commentText: "",
  //     name: ""
  //   })
  // }

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

//   componentWillMount() {
//   fetch('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
//   .then(r => r.json() )
//   .then((json) => {
//     console.log("Data from componentWillMount fetch", json)
//     this.setState({nasa: json})
//   })
// }


  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  // render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    // render() {
    // let nasa = this.state.nasa;
//     render() {
//       let vehicles = this.state.vehicles;
//       let vehicles = vehicleArray.map((vehicles) => {
//       /*
//       The App component needs the following:
//        jumbotron section, form section, vehicle cards section.
//        Your form will also need a header in which you will pass the state of the form upon submit.
//        */
//     return (
//      <div className="App">
//      <main className="row">
//      <section className="col-md-10 offset-md-1">
//        <div className="jumbotron">
//          <h1 className="display-3">Star Wars</h1 > <hr className="my-4"/> < p className = "lead" > The Vehicles of Star Wars < /p>
//        </div >
//        <div className="card form">
//          <div className="card-block">
//            <h2 className="card-title">What is your name, pilot?</h2>
//            <form onSubmit={this.handleSubmit}>
//              <div className="form-group">
//                <input className="form-control col-md-4 offset-md-4" id="pilotName" onChange={this.handleNameChange} name="name" type="text" value={this.state.value} placeholder="Enter your name"/>
//              </div>
//              <button type="submit" className="btn btn-primary">Submit</button>
//            </form>
//            <h1>{this.state.pilot}</h1>
//          </div>
//        </div>
//        < div className = "row" >
//          {vehicles}
//        < /div>
//      </section >
//    </main>
//  </div>
// );
// })
// }
// }




//instrutions
/*
Store vehicles state in a variable.
Map over this variable to access the values needed to render.
*/
// {/*
// The App component needs the following:
//  jumbotron section, form section, vehicle cards section.
//  Your form will also need a header in which you will pass the state of the form upon submit.
//  */}
