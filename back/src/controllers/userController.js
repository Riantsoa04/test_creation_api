const User = require("../models/user");

async function getAllUsers(req, res) {
  try {
    const users = await User.getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

async function getUserById(req, res) {
  try {
    const user = await User.getUserById(req.params.id);
    res.json(user);
  } catch (err) {
    console.error("Erreur dans getUserById :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
}

async function addUser(req, res) {
  const { name, email, password } = req.body;
  try {
    const id = await User.createUser(name, email, password);
    res.json({ id, name, email });
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

async function editUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const affected = await User.updateUser(req.params.id, name, email, password);
    res.json({ message: "Utilisateur mis à jour" });
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

async function deleteUser(req, res) {
  try {
    const affected = await User.deleteUser(req.params.id);
    res.json({ message: "Utilisateur supprime" });
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}


module.exports = { getAllUsers, getUserById, addUser, editUser, deleteUser };
