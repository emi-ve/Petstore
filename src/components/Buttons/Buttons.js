
  import React from "react";

  function handleClick(){
    console.log("Button clicked...")
    let buttonText = this.state.buttonText == "Sold!" 
    this.setState({buttonText: buttonText})
  }


    
    export function Buttons({pet, sellPet}) {
        return (
            <button onClick={()=> sellPet(pet) && {handleClick}}>Adopt Me?</button>
        );
    }
  
