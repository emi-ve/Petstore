import React, { useState, useEffect } from "react";


export function Table({ pets }) {


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
            
        
          
            
            <td><button class="adopt">Adopt</button></td>
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
