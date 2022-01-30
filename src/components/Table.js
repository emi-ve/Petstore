import React, { useState, useEffect } from "react";
import { updatePetStatus } from "./SoldPets";
import { Buttons } from "./Buttons/Buttons.js";
import { Test } from "./test"

//function to mark pets as "sold" by changing API
export function Table({ pets }) {
  const sellPet = async (updateStatus) => {
    updateStatus.status = "sold";
    const updatedPet = await updatePetStatus(updateStatus);
    console.log(updatedPet);
  };

  // const changeToPending = async (updateStatus2) => {
  //   updateStatus2.status = "pending";
  //   const updatedPet = await updatePetStatus(updateStatus2);
  //   console.log(updatedPet);
  // };

  // {
  //   let { isAvailable } = this.state;
  //   let AdoptButton;

  //   if (isAvailable) {
  //     AdoptButton = <Buttons sellPet={sellPet} pet={pet} />
  //   } else {
  //     AdoptButton = <p>I'm Adopted!</p>
  //   }
  // }


  //return API data in built table. 

  return (
    <table class="center">
      <thead>
        {/* column names */}
        <tr>
          <th>Pet Name</th>
          <th>Pet Status</th>
          <th>Pet ID/Category</th>
          <th>Adopt?</th>
        </tr>
      </thead>
      <tbody>
      {pets.length ? (
        pets.map((pet) => (

          // if pet name is less than 20 characters, render pet name. else, typed "invalid"
          <tr>
            {pet.name?.length < 20 ? <td>{pet.name}</td> : <td>invalid</td>}
            <td>{pet.status}</td>
          
          {/* if pet category is not null, render. If it is, insert string "null" */}
            {pet.category != null ? (
              <td>
                id:{pet.id} / category:{pet.category?.name}
              </td>
            ) : (
              <td>id:{pet.id} /  category: null</td>
            )}

              {/* if the pet is available, display button to adopt. If unavailable, show text */}
            {pet.status === "available" ? (
              <td>
                <Buttons sellPet={sellPet} pet={pet} />
              </td>
            ) : (
              <td class="shape">I am sold!</td>
            )}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4"></td>
        </tr>
      )}
      </tbody>
    </table>
  );
}
