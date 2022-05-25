import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

async function GetPeople() {
  try {
    const response = await axios({
      url: `${baseUrl}/people`,
      method: "GET",
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
  return [];
}

async function CreatePerson() {
  try {
    const response = await axios({
      url: `${baseUrl}/people`,
      method: "POST",
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

const petitions = {
  GetPeople,
  CreatePerson,
};

export default petitions;
