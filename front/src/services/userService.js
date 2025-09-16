import axios from "axios";

const API_URL = "https://app-dc9c9368-12cb-4a91-b2af-34df8039b0b8.cleverapps.io/api/user";

export async function getAllUsers() {
  const response = await axios.get(`${API_URL}/`);
  console.log("Réponse API getAllUsers :", response.data);
  return response.data;
}

export async function getUsersById(id) {
  const response = await axios.get(`${API_URL}/${id}`);
  console.log("Réponse API getUsersById :", response.data);
  return response.data;
}

export async function addUser(user) {
  const response = await axios.post(`${API_URL}/add`, user);
  return response.data;
}

export async function updateUser(id, user) {
  const response = await axios.put(`${API_URL}/${id}`, user);
  return response.data;
}

export async function deleteUser(id) {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}


