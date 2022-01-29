import React from "react";
import ReactDOM from 'react-dom'



export class Test extends React.Component {
    constructor(props){
      super(props)
      this.state ={
        button: true
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
      this.setState({
        button:!this.state.button
      })
    }
    render({pet, sellPet}){
      return (
      <div className="container">
        <button className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick} onClick={()=> sellPet(pet)}>Click Me!</button>  
      </div>
      )
    }
    
  }


