const express = require("express");
const { newUser,getAllUsers,deleteUser } = require("../controllers/userController")


const router = express.Router();

router.route("/signup").post(newUser)
router.route("/allusers").get(getAllUsers)
router.route('/:id').delete(deleteUser)

module.exports =router