import React, { useState, useEffect, Component } from "react";
import './App.css';
import { Table } from "./components/Table";
import { NavBar } from "./components/NavBar/NavBar";


class App extends Component {

  state = {
    pets: [],
    pets2: []
  }

  componentDidMount() {
    fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
    .then(res => res.json())
    .then((data) => {
      this.setState({ pets: data })
      console.log(this.state.pets)
    })
    .catch(console.log)

     // call another fetch for the other url endpoint
     fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=sold')
     .then((res) => res.json())
     .then((data2) => {
         // set state in here
         this.setState({ pets2: data2 })
      console.log(this.state.pets2)
     })


    
  }

  

  onSubmit = (fields) => {
    console.log('App comp got: ', fields);
  }
  
  //loading Nav & Table & loading state to table
  render() {

    const { pets = [] } = this.state; 
        return (
          
          <div className="App">
            <header class="header"><h1>Kennel</h1></header>
         
              <div class = "availablePets">
             <h4 class="availableText">Available Pets</h4>
              <Table pets={ this.state.pets}/>
              </div>
              <div class="soldPets">
              <h4 class="unavailableText">Sold Pets</h4>
              <Table pets={ this.state.pets2}/>
              </div>
              
          </div>
        );
      }
      
  
    

  

}


export default App;

