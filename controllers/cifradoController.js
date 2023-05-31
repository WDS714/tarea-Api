const bcrypt = require("bcryptjs");
const saltRounds = 10;
const plainPassword = "password1230";

bcrypt.hash(plainPassword, saltRounds, function (err, hash) {
  if (err) {
    console.error(err);
  } else {
    console.log("se creo hash password", hash);
  }
});

const hashedPassword = "$2b$10$";
const loginPassword = "password1230";

bcrypt.compare(loginPassword, hashedPassword, function (err, result) {
  if (err) {
    console.error(err);
  } else if (result) {
    console.log("La contraseña es válida");
  } else {
    console.log("La contraseña es inválida");
  }
});
