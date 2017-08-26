import React, { Component } from "react";
import "../styles/App.css";

class Vehicles extends Component {
  render() {


      //vehicles to be inserted with <vehicles/>
      let vehicleArray = this.props.vehicles;
      let vehicles = vehicleArray.map((vehicles) => {
        return (
        /* Create the vehicle card below: */
        < div key = {vehicles.name} className = "col-md-4" >
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">Vehicle: {vehicles.name}</h4>
              <h5 className="card-subtitle mb-2 text-muted">Model: {vehicles.model}</h5>
              <div className="card">
                <div className="card-block">
                  <h5 className="card-subtitle mb-2 text-muted">Specs</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Manufacturer: {vehicles.manufacturer}</li>
                    <li className="list-group-item">Class: {vehicles.vehicle_class}</li>
                    <li className="list-group-item">Passengers: {vehicles.passengers}</li>
                    <li className="list-group-item">Crew: {vehicles.crew}</li>
                    <li className="list-group-item">Length: {vehicles.length}</li>
                    <li className="list-group-item">Max Speed: {vehicles.max_atmosphering_speed}</li>
                    <li className="list-group-item">Cargo Capacity: {vehicles.cargo_capacity}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        < /div>
        )
      })
      return (  <main className="row">
          <section className="col-md-10 offset-md-1">
            < div className = "row" >
              {vehicles}
            < /div>
          </section >
        </main>
    );
  }
}

export default Vehicles;
