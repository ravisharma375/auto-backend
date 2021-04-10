const Sequelize = require("sequelize");


const sequelize = new Sequelize(
	"d53rg79hvhuij3", //DataBase Name
	"xjituyujubnkkr", //DataBase UserName
	"ce2716ec8ce4f50ee32f0e122389208cde5074f71a80eb58d09449fa5d932fa5", //DataBase Password
	{
		host: "ec2-34-239-33-57.compute-1.amazonaws.com", //localhost
		port: "5432", //DataBase Port No
		dialect: "postgres", //MYSQL DB
	},
);



sequelize.authenticate().then((err) => {
	if (err) {
		console.log(err);
	}
	console.log("DataBase Configure SuccessFully...");
});
sequelize
	.sync({ force: false })
	.then((result) => {
		console.log("sequelize is running");
	})
	.catch((err) => {
		console.log(err);
	});
module.exports = { Sequelize};
