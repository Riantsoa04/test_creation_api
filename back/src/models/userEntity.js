const db = require("../config/db");

async function getUserEntity() {
  const [result] = await db.query("SELECT * FROM userEntity");
  return result;
}

async function createUserEntity(idEntity,idUser) {
  const [result] = await db.query(
    "INSERT INTO userEntity (idEntity, idUser) VALUES (?,?)",
    [idEntity,idUser]
  );
  return result.insertId;
}

async function getUserEntityByIdUser(id) {
  const [result] = await db.query("SELECT * FROM userEntity WHERE idUserEntity= ?", [id]);
  return result[0];
}

async function updateUserEntity(id,idUser,idEntity) {
  const [result] = await db.query(
    "UPDATE userEntity SET idEntity = ?, idUser = ? where idUserEntity = ?",
    [idEntity,idUser,id]
  );
  return result.insertId;
}

async function deleteUserEntity(id) {
  const [result] = await db.query("DELETE FROM userEntity WHERE idUserEntity = ?"
    , [id]);
  return result.affectedRows;
}

async function getViewUserEntity() {
  const [result] = await db.query("SELECT * FROM v_userEntite");
  return result;
}


module.exports = { getUserEntity,createUserEntity,getUserEntityByIdUser,updateUserEntity,deleteUserEntity,getViewUserEntity };