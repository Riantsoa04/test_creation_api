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

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });