import React, { useState, useEffect, Component } from "react";
import './App.css';
import { Table } from "./components/Table";


class App extends Component {

  //declaring state as empty array for both API fetch calls
  state = {
    pets: [],
    pets2: []
  }

  //  fetch available pets from API, set state
  componentDidMount() {
    fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
    .then(res => res.json())
    .then((data) => {
      this.setState({ pets: data })
      console.log(this.state.pets)
    })
    .catch(console.log)

     // fetch sold pets from API, set state
     fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=sold')
     .then((res) => res.json())
     .then((data2) => {
        this.setState({ pets2: data2 })
      console.log(this.state.pets2)
     })
    
  }

  
  // passing API pet data as state to tables and rendering to DOM, one sold pets and one available
  render() {

    const { pets = [] } = this.state; 
        return (
          
          <div className="App" >
            <header className="header"><img class="logo" src={ require('./assets/PetAdoption.png')  } /> </header>
            <div className="petTables">
              <div className = "availablePets" >
             <h4 className="availableText">Available Pets</h4>
              <Table pets={ this.state.pets} />
              </div>
              <div className="soldPets">
              <h4 className="unavailableText">Sold Pets</h4>
              <Table pets={ this.state.pets2 }/>
              </div>
              </div>
              
          </div>
        );
      }
      
  
    

  

}


export default App;

