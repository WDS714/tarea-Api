const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
exports.getAllUsers = (req, res) => {
  userModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
};
exports.createUser = (req, res) => {
  const { username, email, password } = req.body;
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      const newUser = new userModel({
        username,
        email,
        password,
      });
      newUser
        .save()
        .then(() => res.status(201).json({ success: "crear" })).catch((err) =>
          res.status(500).json({ error:err.message})
        );
    }
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  userModel
    .findByIdAndUpdate(id, { username, email, password }, { new: true })
    .then((user) => {
      if (!user) throw new Error(`usuario con id${id} no se encontro`);
      res.status(200).json(user);
    })
    .catch((err) =>
      res.status(500).json({ message: "Un error a ocurrio.", err })
    );
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  userModel
    .findByIdAndUpdate(id)
    .then((user) => {
      if (!user) throw new Error(`usuario con id ${id} no se encontro`);
      res.status(200).json({ message: "usuario borrado" });
    })
    .catch((err) =>
      res.status(500).json({ message: "Un error a ocurrio.", err })
    );
};
