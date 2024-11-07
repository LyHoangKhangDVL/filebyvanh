module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "CatalizCS",
	description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif", "randomgif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users, Threads }) {
    const { join } = global.nodemodule["path"];
	const { threadID } = event;
  var fullYear = global.client.getTime("fullYear");
  	var getHours = await global.client.getTime("hours");
  var getData = await Users.getData(event.author)
       var nameAuthor = typeof getData.name == "undefined" ? "link join" : getData.name
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "RiceField" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`PAIN THIÊN ĐẠO ĐÃ ĐẾN CÂN CẢ BOX!!!!\n Sài /help để dùng lệnh nhe`, threadID);
	}
  else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
        const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif","randomgif");
			const pathGif = join(path, `${threadID}.mp4`);

			var mentions = [], nameArray = [], memLength = [], iduser = [], id = 0; i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
        const { join } = global.nodemodule["path"];
        //const cc = event.logMessageData.addedParticipants.join.id(" ");
		const userName = event.logMessageData.addedParticipants[id].fullName;
        iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
				nameArray.push(userName);
				mentions.push({ tag: userName, id: event.senderID });
        /*if (!global.data.allUserID.includes(id)) {
					await Users.createData(id, { name: userName, data: {} });
					global.data.allUserID.push(id);
					logger(global.getText("handleCreateDatabase", "newUser", id), "[ DATABASE ]");
      }*/
				memLength.push(participantIDs.length - i++);
        if (!global.data.allUserID.includes(id)) {
					await Users.createData(id, { name: userName, data: {} });
					global.data.userName.set(id, userName);
					global.data.allUserID.push(id);
				}
			}
			memLength.sort((a, b) => a - b);		
		(typeof threadData.customJoin == "undefined") ? msg = "Hãy cảm nhận nỗi đau\nSuy ngẫm về nỗi đau\nHọc cách chấp nhận nó để biết thêm về nó\nNhững ai không biết đến nỗi đau thì sẽ không hiểu được thế nào là hoà bình thật sự\nĐến lúc rồi [{name}] phải nếm mùi đau khổ": msg = threadData.customJoin;
			msg = msg
                .replace(/\{iduser}/g, iduser)
                .replace(/\{name}/g, nameArray.join(', '))
                .replace(/\{type}/g, (memLength.length > 1) ? '𝒄𝒂́𝒄 𝒄ậ𝒖' : '𝒄ậ𝒖')
                .replace(/\{soThanhVien}/g, memLength.join(', '))
                .replace(/\{threadName}/g, threadName)
                .replace(/\{session}/g, hours <= 10 ? "𝑠𝑎́𝑛𝑔" : 
    hours > 10 && hours <= 12 ? "𝑡𝑟𝑢̛𝑎" :
    hours > 12 && hours <= 18 ? "𝑐ℎ𝑖𝑒̂̀𝑢" : "𝑡𝑜̂́𝑖")
                .replace(/\{fullYear}/g, fullYear)
                .replace(/\{author}/g, nameAuthor)
                .replace(/\{time}/g, time);  



			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
      
		} catch (e) { return console.log(e) };
	}
                       }