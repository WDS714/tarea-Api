
const x = require("express");


const router = x.Router();


const authController = require("../controllers/authController");

const userController = require("../controllers/userController");

router.delete("/:id", userController.deleteUser);

router.get("/", userController.getAllUsers);

router.post("/login", authController.authenticateUser);

router.post("/", userController.createUser);


router.put("/:id", userController.updateUser);







module.exports = router;
