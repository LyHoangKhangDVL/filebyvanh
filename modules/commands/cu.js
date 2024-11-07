module.exports.config = {
	name: "cu",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "vanh",
	description: "Random cu ",
	commandCategory: "make by vanh",
	usages: "",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://randomapi.vietle27.repl.co/cu').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
             body: `nghiện cuu à`,
						attachment: fs.createReadStream(__dirname + `/cache/cu.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/cu.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/cu.${ext}`)).on("close", callback);
			})
}