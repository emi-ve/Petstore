import React, { useState, useEffect, Component } from "react";
import './App.css';
import { Table } from "./components/Table";
import { NavBar } from "./components/NavBar/NavBar";

class App extends Component {

  state = {
    pets: []
  }

  componentDidMount() {
    fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
    .then(res => res.json())
    .then((data) => {
      this.setState({ pets: data })
      console.log(this.state.pets)
    })
    .catch(console.log)


    
  }

  

  onSubmit = (fields) => {
    console.log('App comp got: ', fields);
  }
  
  //loading Nav & Table & loading state to table
  render() {
    const { pets = [] } = this.state; 
        return (
          
          <div className="App">
            
              <h1>Kennel</h1>
              <NavBar />
             
              <Table pets={ this.state.pets}/>
              
              
          </div>
        );
      }
      
  
    

  

}


export default App;

