import React, { useState, useEffect } from "react";
import { updatePetStatus } from "./SoldPets"
import { Buttons } from "./Buttons/Buttons.js"





export function Table({ pets }) {



const sellPet = async (updateStatus) => {
    updateStatus.status = "sold";
    const updatedPet = await updatePetStatus(updateStatus);
    console.log(updatedPet);

};




  return (
    <table class ="center">
      <thead>
        <tr>
          <th>Pet Name</th>
          <th>Pet Status</th>
          <th>Pet ID/Category</th>
          <th>Adopt?</th>
        </tr>
      </thead>
      {pets.length ? (
        pets.map((pet) => (
          <tr>
            <td>{pet.name}</td>
            <td>{pet.status}</td>
            <td>id:{pet.id} category:{pet.category?.name}</td>
            
        
          
            
            <td><Buttons sellPet={sellPet} pet={pet} /></td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4"></td>
        </tr>
      )}   
    </table>
  );
}
