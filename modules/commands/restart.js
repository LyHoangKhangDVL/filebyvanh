module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "Khởi Động Lại Bot.",
	commandCategory: "QTV BOX",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Hết Sủa ",event.threadID, () =>process.exit(1))