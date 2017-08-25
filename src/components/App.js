import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
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

    constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
  // handleNameChange(event){
  //   this.setState({
  //     name: event.target.value
  //   })
  // }


    handleNameChange(event){
    this.setState({
      pilot: event.target.value
    })
  }

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

    handleFormSubmit(event){
      event.preventDefault()
      this.setState({
        pilot: " ",
        value: this.state.pilot

      })
    }
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
    componentWillMount() {

      fetch('https://swapi.co/api/vehicles/')
      .then(r => r.json() )
      .then((json) => {
        console.log("Data from componentWillMount fetch", json)
        this.setState({vehicles: json})
      })
    }

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
    render() {
      let vehicles = this.state.vehicles;

    return (
     <div className="App">
        {/*
        The App component needs the following:
         jumbotron section, form section, vehicle cards section.
         Your form will also need a header in which you will pass the state of the form upon submit.
         */}
      </div>
    );
  }
}

export default App;
