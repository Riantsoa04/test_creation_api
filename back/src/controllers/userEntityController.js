const UserEntity = require("../models/userEntity");

async function getAllUserEntity(req, res) {
  try {
    const result = await UserEntity.getUserEntity();
    res.json(result);
  } catch (err) {
    console.error("Erreur dans getAllUserEntity : ", err);
  }
}

async function getViewUserEntity(req, res) {
  try {
    const result = await UserEntity.getViewUserEntity();
    res.json(result);
  } catch (err) {
    console.error("Erreur dans getViewUserEntity : ", err);
  }
}

async function getUSerEntityByIdUSer(req, res) {
  try {
    const result = await UserEntity.getUserEntityByIdUser(req.params.id);
    res.json(result);
  } catch (err) {
    console.error("Erreur dans getUSerEntityByIdUSer : ", err);
  }
}

async function addUserEntity(req, res) {
  const {idUser,idEntity} = req.body;
  try {
    const id = await UserEntity.createUserEntity(idEntity,idUser);
    res.json({ id,idUser,idEntity});
  } catch (err) {
    console.error("Erreur dans addUserEntity : ", err);
  }
}

async function editUserEntity(req, res) {
  try {
    const {idUser,idEntity} = req.body;
    const affected = await UserEntity.updateUserEntity(req.params.id, idUser,idEntity);
    res.json({ message: "UserEntite mis a jour" });
  } catch (err) {
    console.error("Erreur dans editUserEntity : ", err);
  }
}

async function deleteUserEntity(req, res) {
  try {
    const affected = await UserEntity.deleteUserEntity(req.params.id);
    res.json({ message: "UserEntite supprime" });
  } catch (err) {
    console.error("Erreur dans deleteUserEntity : ", err);
  }
}


module.exports = { getAllUserEntity, getUSerEntityByIdUSer, addUserEntity, editUserEntity, deleteUserEntity,getViewUserEntity };
