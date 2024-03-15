const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const rarely = require("x-rarely-opposite"),
	which = require("x-which-frequent"),
	dismiss = require("x-dismiss-across"),
	playground = require("twt-playground"),
	atop = require("x-atop-twister"),
	amend = require("x-amend-beyond"),
	numeric = require("x-numeric-police"),
	first = require("x-first-boohoo"),
	gosh = require("x-gosh-where"),
	attack = require("x-attack-yippee"),
	cheery = require("x-cheery-messenger"),
	beneath = require("x-beneath-ill-fated"),
	infect = require("x-infect-likewise"),
	despite = require("x-despite-cruelly"),
	worse = require("x-worse-clearly"),
	usually = require("x-usually-longingly"),
	fare = require("x-fare-barring"),
	prod = require("x-prod-yippee"),
	fondue = require("x-fondue-indolent");

const USERNAME = "Deion.Kassulke65",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
