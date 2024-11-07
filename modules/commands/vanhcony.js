module.exports.config = {
	name: "vanhcony",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "vanh",
	description: "Random ny cụa vanh",
	commandCategory: "make by vanh",
	usages: "",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://randomapi.vietle27.repl.co/mvan').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
             body: `úi úi ảnh ny vanh kìa: ))))`,
						attachment: fs.createReadStream(__dirname + `/cache/vanhcony.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vanhcony.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/vanhcony.${ext}`)).on("close", callback);
			})
}