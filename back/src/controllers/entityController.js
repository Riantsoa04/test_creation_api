const Entity = require("../models/entity");

async function getAllEntity(req, res) {
  try {
    const result = await Entity.getEntity();
    res.json(result);
  } catch (err) {
    console.error("Erreur dans getAllEntity : ", err);
  }
}

async function getEntityById(req, res) {
  try {
    const result = await Entity.getEntityById(req.params.id);
    res.json(result);
  } catch (err) {
    console.error("Erreur dans getEntityById : ", err);
  }
}

async function addEntity(req, res) {
  const {name} = req.body;
  try {
    const id = await Entity.createEntity(name);
    res.json({ id, name});
  } catch (err) {
    console.error("Erreur dans addEntity : ", err);
  }
}

async function editEntity(req, res) {
  try {
    const {name} = req.body;
    const affected = await Entity.updateEntity(req.params.id, name);
    res.json({ message: "Entite mis a jour" });
  } catch (err) {
    console.error("Erreur dans editEntity : ", err);
  }
}

async function deleteEntity(req, res) {
  try {
    const affected = await Entity.deleteEntity(req.params.id);
    res.json({ message: "Entite supprime" });
  } catch (err) {
    console.error("Erreur dans editEntity : ", err);
  }
}


module.exports = { getAllEntity, getEntityById, addEntity, editEntity, deleteEntity };
