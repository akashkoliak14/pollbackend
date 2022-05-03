const express = require("express")

const router = express.Router()


const usercontroller = require("./../controllers/user")
router.post("/", usercontroller.createuser)
router.get("/",usercontroller.getAlluserinfo)
router.get("/:userId", usercontroller.getuserinfo)
module.exports = router