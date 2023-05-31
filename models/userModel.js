const mongoose = require("mongoose");
const uri = "mongodb+srv://WDS714:<password>@database.75wn1yv.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Se conecto con la base de datos"))
  .catch((err) => console.log("Error de conexion con la base de datos", err));

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
}); 

module.exports = mongoose.model("users", userSchema);
