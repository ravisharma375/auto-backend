const router = require("express").Router();
const passport = require("passport");

router.get("/connect",(req,res)=>{
    res.send("Success")
})

module.exports = router;
