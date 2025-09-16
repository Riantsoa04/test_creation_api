const express = require("express");
const cors = require("cors");
const db = require("./src/config/db");

const userRoutes = require("./src/routes/userRoutes");
const entityRoutes = require("./src/routes/entityRoutes");
const userEntityRoutes = require("./src/routes/userEntityRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/entity", entityRoutes);
app.use("/api/userEntity", userEntityRoutes);

app.listen(3000, () => console.log("Backend lancé sur http://localhost:3000"));
