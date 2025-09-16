const express = require("express");
const router = express.Router();
const { getAllEntity, getEntityById, addEntity, editEntity, deleteEntity } = require("../controllers/entityController");

router.get("/", getAllEntity);
router.get("/:id", getEntityById);
router.post("/add", addEntity);
router.put("/:id", editEntity);
router.delete("/:id", deleteEntity);

module.exports = router;
