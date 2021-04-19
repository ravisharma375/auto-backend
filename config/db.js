const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	"dqr8vb23ep1b1", //DataBase Name
	"vwzmjwzhqbwzln", //DataBase UserName
	"a70071939726de464b1c0f9310f8fdff0f56924a7d892856664cd128bfe24b11", //DataBase Password
	{
		host: "ec2-52-21-252-142.compute-1.amazonaws.com", //localhost
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
module.exports = { Sequelize };
