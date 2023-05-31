const express = require("express");

const app = express();
const port = 3000;

const apiRoute = "/api/users";

const userRoutes = require("./routes/userRoutes");
app.use(express.json());
app.use(apiRoute, userRoutes);

app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log("El servidor se ejecuta http://localhost:" + port);
});
