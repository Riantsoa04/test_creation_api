const express = require("express");
const router = express.Router();
const { getViewUserEntity,getAllUserEntity, getUSerEntityByIdUSer, addUserEntity, editUserEntity, deleteUserEntity } = require("../controllers/userEntityController");

router.get("/", getViewUserEntity);
router.get("/:id", getUSerEntityByIdUSer);
router.post("/add", addUserEntity);
router.put("/:id", editUserEntity);
router.delete("/:id", deleteUserEntity);

module.exports = router;
