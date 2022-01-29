import React, { useState, useEffect } from "react";
import { updatePetStatus } from "./SoldPets";
import { Buttons } from "./Buttons/Buttons.js";
import { Test } from "./test"

export function Table({ pets }) {
  const sellPet = async (updateStatus) => {
    updateStatus.status = "sold";
    const updatedPet = await updatePetStatus(updateStatus);
    console.log(updatedPet);
  };

  const changeToPending = async (updateStatus2) => {
    updateStatus2.status = "pending";
    const updatedPet = await updatePetStatus(updateStatus2);
    console.log(updatedPet);
  };

  // {
  //   let { isAvailable } = this.state;
  //   let AdoptButton;

  //   if (isAvailable) {
  //     AdoptButton = <Buttons sellPet={sellPet} pet={pet} />
  //   } else {
  //     AdoptButton = <p>I'm Adopted!</p>
  //   }
  // }

  return (
    <table class="center">
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
            {pet.name?.length < 20 ? <td>{pet.name}</td> : <td>invalid</td>}
            <td>{pet.status}</td>

            {pet.category != null ? (
              <td>
                id:{pet.id} category:{pet.category?.name}
              </td>
            ) : (
              <td>id:{pet.id} category: null</td>
            )}

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
    </table>
  );
}
