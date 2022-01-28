
  import React from "react";


    
    export function Buttons({pet, sellPet}) {
        return (
            <button onClick={()=> sellPet(pet)}>Adopt Me?</button>
        );
    }
  
