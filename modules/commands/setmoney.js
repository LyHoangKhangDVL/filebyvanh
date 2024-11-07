module.exports.config = {
    name: "setmoney",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "CatalizCS",
    description: "Điều chỉnh thông tin của người dùng",
    commandCategory: "SP ADMIN",
    usages: "[add/all/set/clean] [Số tiền] [Tag người dùng/reply]",
    cooldowns: 5
};

module.exports.run = async function ({ event, api, Currencies, args,Users }) {
    const { threadID, messageID, senderID, messageReply } = event;
   
    const { throwError } = global.utils;
    const { increaseMoney, decreaseMoney, getData } = Currencies;
   const mentionID = Object.keys(event.mentions);
    const money = parseInt(args[1]);
    var message = [];
    var error = [];

    switch (args[0]) {
        case "add": {
          if (event.type == "message_reply") {
            var name = (await Users.getData(event.messageReply.senderID)).name;
          await Currencies.increaseMoney(event.messageReply.senderID, money); console.log("done");
   
          return api.sendMessage(`➝ 𝐂𝐨̣̂𝐧𝐠 𝐓𝐢𝐞̂̀𝐧 𝐂𝐡𝐨 ${name}\n• 𝐂𝐨̣̂𝐧𝐠 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 ${money}$` ,event.threadID)  
            
          } else if (mentionID.length != 0) {
                for (singleID of mentionID) {
                if (!money || isNaN(money)) return throwError(this.config.name, threadID, messageID);
                try {
                    await Currencies.increaseMoney(singleID, money);
                    message.push(singleID);
                } catch (e) { error.push(e); console.log(e) };
                }
                return api.sendMessage(`➝ 𝐂𝐨̣̂𝐧𝐠 𝐓𝐢𝐞̂̀𝐧 𝐂𝐡𝐨 𝐁𝐨𝐱 𝐂𝐡𝐚𝐭\n• 𝐂𝐨̣̂𝐧𝐠 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 ${money}$ 𝐂𝐡𝐨 ${message.length}`, threadID, function () { if (error.length != 0) return api.sendMessage(`➝ 𝐂𝐨̣̂𝐧𝐠 𝐓𝐢𝐞̂̀𝐧 𝐂𝐡𝐨 𝐁𝐨𝐱 𝐂𝐡𝐚𝐭\n• 𝐂𝐨̣̂𝐧𝐠 𝐓𝐡𝐚̂́𝐭 𝐁𝐚̣𝐢 ${money}$ 𝐂𝐡𝐨 ${error.length}`, threadID) }, messageID);
            } else {
                if (!money || isNaN(money)) return throwError(this.config.name, threadID, messageID);
                try {
                await Currencies.increaseMoney(senderID, money);
                message.push(senderID);
                } catch (e) { error.push(e) };
                return api.sendMessage(`➝ 𝐂𝐨̣̂𝐧𝐠 𝐓𝐢𝐞̂̀𝐧 𝐂𝐡𝐨 𝐁𝐚̉𝐧 𝐓𝐡𝐚̂𝐧\n• 𝐂𝐨̣̂𝐧𝐠 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 ${money}$`, threadID, function () { if (error.length != 0) return api.sendMessage(`➝ 𝐂𝐨̣̂𝐧𝐠 𝐓𝐢𝐞̂̀𝐧 𝐂𝐡𝐨 𝐁𝐚̉𝐧 𝐓𝐡𝐚̂𝐧\n• 𝐂𝐨̣̂𝐧𝐠 𝐓𝐡𝐚̂́𝐭 𝐁𝐚̣𝐢 ${money}$`, threadID) }, messageID);
            }
        }

        case "set": {
            if (mentionID.length != 0) {
                for (singleID of mentionID) {
                if (!money || isNaN(money)) return throwError(this.config.name, threadID, messageID);
                try {
                    await Currencies.setData(singleID, { money });
                    message.push(singleID);
                } catch (e) { error.push(e) };
                }
                return api.sendMessage(`➝ 𝐒𝐞𝐭 𝐓𝐢𝐞̂̀𝐧  ${money}$\n• 𝐒𝐞𝐭 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 𝐂𝐡𝐨 ${message.length}`, threadID, function () { if (error.length != 0) return api.sendMessage(`➝ 𝐒𝐞𝐭 𝐓𝐢𝐞̂̀𝐧 ${money}$\n• 𝐒𝐞𝐭 𝐓𝐡𝐚̂́𝐭 𝐁𝐚̣𝐢 𝐂𝐡𝐨 ${error.length}`, threadID) }, messageID);
            } else if (args[2]) {
                if (!money || isNaN(money)) return throwError(this.config.name, threadID, messageID);
                try {
                await Currencies.setData(args[2], { money });
                message.push(args[2]);
                } catch (e) { error.push(e) };
                return api.sendMessage(`➝ 𝐒𝐞𝐭 𝐓𝐢𝐞̂̀𝐧  ${money}$\n• 𝐒𝐞𝐭 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 𝐂𝐡𝐨 ${message.length}`, threadID, function () { if (error.length != 0) return api.sendMessage(`➝ 𝐒𝐞𝐭 𝐓𝐢𝐞̂̀𝐧 ${money}$\n• 𝐒𝐞𝐭 𝐓𝐡𝐚̂́𝐭 𝐁𝐚̣𝐢 𝐂𝐡𝐨 ${error.length}`, threadID) }, messageID);
            }
            else {
                if (!money || isNaN(money)) return throwError(this.config.name, threadID, messageID);
                try {
                await Currencies.setData(senderID, { money });
                message.push(senderID);
                } catch (e) { error.push(e) };
                return api.sendMessage(`➝ 𝐒𝐞𝐭 𝐓𝐢𝐞̂̀𝐧 𝐂𝐡𝐨 𝐁𝐚̉𝐧 𝐓𝐡𝐚̂𝐧\n• 𝐒𝐞𝐭 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 ${money}$`, threadID, function () { if (error.length != 0) return api.sendMessage(`➝ 𝐒𝐞𝐭 𝐓𝐢𝐞̂̀𝐧 𝐂𝐡𝐨 𝐁𝐚̉𝐧 𝐓𝐡𝐚̂𝐧\n• 𝐒𝐞𝐭 𝐓𝐡𝐚̂́𝐭 𝐁𝐚̣𝐢 ${money}$`, threadID) }, messageID);
            }
        }

        case "clean": {
            if (mentionID.length != 0) {
                for (singleID of mentionID) {
                try {
                    await Currencies.setData(singleID, { money: 0 });
                    message.push(singleID);
                } catch (e) { error.push(e) };
            }
                return api.sendMessage(`➝ 𝐗𝐨𝐚́ 𝐓𝐢𝐞̂̀𝐧 𝐂𝐮̉𝐚 𝐁𝐨𝐱 𝐂𝐡𝐚𝐭\n• 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 !!!`, threadID, function () { if (error.length != 0) return api.sendMessage(`➝ 𝐗𝐨𝐚́ 𝐓𝐢𝐞̂̀𝐧 𝐂𝐮̉𝐚 𝐁𝐨𝐱 𝐂𝐡𝐚𝐭\n• 𝐓𝐡𝐚̂́𝐭 𝐁𝐚̣𝐢 !!!`, threadID) }, messageID)
            } else {
                try {
                await Currencies.setData(senderID, { money: 0 });
                message.push(senderID);
                } catch (e) { error.push(e) };
                return api.sendMessage(`➝ 𝐗𝐨𝐚́ 𝐓𝐢𝐞̂̀𝐧 𝐂𝐡𝐨 𝐁𝐚̉𝐧 𝐓𝐡𝐚̂𝐧\n• 𝐗𝐨𝐚́ 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 ${money}$`, threadID, function () { if (error.length != 0) return api.sendMessage(`➝ 𝐗𝐨𝐚́ 𝐓𝐢𝐞̂̀𝐧 𝐂𝐡𝐨 𝐁𝐚̉𝐧 𝐓𝐡𝐚̂𝐧\n• 𝐗𝐨𝐚́ 𝐓𝐡𝐚̂́𝐭 𝐁𝐚̣𝐢 ${money}$`, threadID) }, messageID);
            }
        }
        
        case "all": {
           var name = (await Users.getData(event.senderID)).name
            if(!args[1]) return api.sendMessage("➝ 𝐋𝐞̣̂𝐧𝐡 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠: setmoney\n• 𝐁𝐚̣𝐧 𝐂𝐡𝐮̛𝐚 𝐍𝐡𝐚̣̂𝐩 𝐒𝐨̂́ 𝐓𝐢𝐞̂̀𝐧 𝐂𝐚̂̀𝐧 𝐒𝐞𝐭 !!!", threadID, messageID);
            if(isNaN(args[1])) return api.sendMessage("Thôi Khỏi Sài Đi Mày Ngu Vcl !!! :)", threadID, messageID);
            if(args[1] > 1000000000000) return api.sendMessage("➝ 𝐋𝐞̣̂𝐧𝐡 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠: 𝐬𝐞𝐭𝐦𝐨𝐧𝐞𝐲\n• 𝐒𝐨̂́ 𝐓𝐢𝐞̂̀𝐧 𝐏𝐡𝐚̉𝐢 𝐍𝐡𝐨̉ 𝐇𝐨̛𝐧 < 𝟏𝟎𝟎𝟎𝟎𝟎𝟎𝟎𝟎𝟎", threadID, messageID);
            let { participantIDs } = await api.getThreadInfo(threadID);
            for(let i of participantIDs) {
                try {
                    await increaseMoney(parseInt(i), parseInt(args[1]));
                    message.push(i);
                } catch(e) { error.push(e) }
            }
            return api.sendMessage(`${name} Đ𝐚̃ 𝐜𝐨̣̂𝐧𝐠 𝐭𝐡𝐞̂𝐦 ${args[1]}𝐕𝐍Đ 𝐜𝐡𝐨 ${message.length} 𝐧𝐠𝐮̛𝐨̛̀𝐢`, threadID, function () { if (error.length != 0) return api.sendMessage(`[⇛𝐌𝐨𝐧𝐞𝐲] 𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐜𝐨̣̂𝐧𝐠 𝐭𝐡𝐞̂𝐦 𝐭𝐢𝐞̂̀𝐧 𝐜𝐡𝐨 ${error.length} 𝐧𝐠𝐮̛𝐨̛̀𝐢!`, threadID) }, messageID);
        }

        case "uid": {
           var id = args[1];
		var cut = args[2];
		let nameeee = (await Users.getData(id)).name
		   return api.sendMessage(`[⇛𝐌𝐨𝐧𝐞𝐲] Đ𝐚̃ 𝐜𝐨̣̂𝐧𝐠 𝐭𝐡𝐞̂𝐦 ${nameeee} 𝐭𝐡𝐚̀𝐧𝐡 ${cut} 𝐕𝐍Đ`, event.threadID, () => Currencies.increaseMoney(id, parseInt(cut)), event.messageID)	
          }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }
}