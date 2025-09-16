const db = require("../config/db");

async function getEntity() {
  const [result] = await db.query("SELECT * FROM entity");
  return result;
}

async function createEntity(name) {
  const [result] = await db.query(
    "INSERT INTO entity (name) VALUES (?)",
    [name]
  );
  return result.insertId;
}

async function getEntityById(id) {
  const [result] = await db.query("SELECT * FROM entity WHERE idEntity = ?", [id]);
  return result[0];
}

async function updateEntity(id,name) {
  const [result] = await db.query(
    "UPDATE entity SET name = ? WHERE idEntity = ?",
    [name,id]
  );
  return result.insertId;
}

async function deleteEntity(id) {
  const [result] = await db.query("DELETE FROM entity WHERE idEntity = ?", [id]);
  return result.affectedRows;
}

module.exports = { getEntity,createEntity,getEntityById,updateEntity,deleteEntity };