import React, { useState } from "react";


    //create Adopt button for table. When button is clicked, make a call to sellPet & update status

    export function Buttons({pet, sellPet}) {


        return (
          <div>
            
            <button class="adoptButton" onClick={()=> sellPet(pet) }>Adopt Me?</button> </div>
        );
    }
  
