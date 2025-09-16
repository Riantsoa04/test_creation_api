import axios from "axios";

const API_URL = "http://localhost:3000/api/userEntity";

export async function getAll() {
  const response = await axios.get(`${API_URL}/`);
  console.log("Réponse API getAllUsersEntite :", response.data);
  return response.data;
}

export async function getUSerEntityById(id) {
  const response = await axios.get(`${API_URL}/${id}`);
  console.log("Réponse API getUSerEntityById :", response.data);
  return response.data;
}

export async function addUserEntity(user) {
  const response = await axios.post(`${API_URL}/add`, user);
  return response.data;
}

export async function editUserEntity(id, user) {
  const response = await axios.put(`${API_URL}/${id}`, user);
  console.log("Réponse API editUserEntity :", response.data);
  return response.data;
}

export async function deleteUserEntity(id) {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}


