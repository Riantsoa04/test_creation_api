const express = require("express");
const router = express.Router();
const { getAllUsers,getUserById,addUser,editUser,deleteUser } = require("../controllers/userController");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/add", addUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

module.exports = router;
