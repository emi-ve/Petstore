import React, { useState } from "react";


    
    export function Buttons({pet, sellPet}) {

    

        return (
          <div>
            
            <button onClick={()=> sellPet(pet) }>Adopt Me?</button> </div>
        );
    }
  
