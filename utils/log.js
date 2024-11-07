const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
				console.log(chalk.bold.hex("#00c300").bold('◈ HoangHuy: ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#00c300").bold('◈ HoangHuy: ') + data);
			break;
		default:
				console.log(chalk.bold.hex("#00c300").bold(`${option}  `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#00c300").bold('◈ HoangHuy:') + data);
			break;
		case "error":
		console.log(chalk.bold.hex("#00c300").bold('◈ HoangHuy:') + data);
			break;
		default:
	console.log(chalk.bold.hex("#00c300","#00c300").bold(`◈ HoangHuy: `) + data);
			break;
	}
} 