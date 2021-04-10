const router = require("express").Router();
const passport = require("passport");
const { sequelize } = require("../config/db");
router.get("/connect", (req, res) => {
	res.send("Success");
});

module.exports = router;
