import axios from "axios";

const API_URL = "https://app-dc9c9368-12cb-4a91-b2af-34df8039b0b8.cleverapps.io/api/entity";

export async function getAllEntity() {
  const response = await axios.get(`${API_URL}/`);
  console.log("Réponse API getAllEntity :", response.data);
  return response.data;
}

export async function getEntitysById(id) {
  const response = await axios.get(`${API_URL}/${id}`);
  console.log("Réponse get id :", response.data);

  return response.data;
}

export async function addEntity(entity) {
  const response = await axios.post(`${API_URL}/add`, entity);
  return response.data;
}

export async function updateEntity(id, entity) {
  const response = await axios.put(`${API_URL}/${id}`, entity);
  return response.data;
}

export async function deleteEntity(id) {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}


