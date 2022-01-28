import axios from "axios";


export const updatePetStatus = async (updatedPet) => {
  const response = await axios({
    method: "PUT",
    url: `https://petstore.swagger.io/v2/pet`,
    data: updatedPet
  });

  return response.data;
};