const db = require("../config/db");

async function getUsers() {
  const [result] = await db.query("SELECT * FROM user");
  return result;
}

async function createUser(name, email, password) {
  const [result] = await db.query(
    "INSERT INTO user (userName, email, pwd) VALUES (?, ?, ?)",
    [name, email, password]
  );
  return result.insertId;
}

async function getUserById(id) {
  const [result] = await db.query("SELECT * FROM user WHERE idUser = ?", [id]);
  return result[0];
}

async function updateUser(id,name, email, password) {
  const [result] = await db.query(
    "UPDATE user SET userName = ?, email = ?, pwd = ? WHERE idUser = ?",
    [name, email, password,id]
  );
  return result.insertId;
}

async function deleteUser(id) {
  const [result] = await db.query("DELETE FROM user WHERE idUser = ?", [id]);
  return result.affectedRows;
}

module.exports = { getUsers,createUser,getUserById,updateUser,deleteUser };