module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "MiraicommandCategory Team", 
	description: "Quản lý admin bot",
	commandCategory: "Admin",
	usages: "[list/add/remove] [userID]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {
    "vi": {
        "listAdmin": '====『 𝐀𝐝𝐦𝐢𝐧 』==== \n\n%1\n\n%2',
        "notHavePermssion": '[❗] ➝ 𝐇𝐢𝐞̣̂𝐧 𝐓𝐚̣𝐢 𝐁𝐚̣𝐧 𝐊𝐡𝐨̂𝐧𝐠 𝐂𝐨́ 𝐐𝐮𝐲𝐞̂̀𝐧 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 [ %1 ]\n• 𝐍𝐚̂𝐧𝐠 𝐐𝐮𝐲𝐞̂̀𝐧 𝐇𝐚̣𝐧 𝐋𝐢𝐞̂𝐧 𝐇𝐞̣̂ 𝐀𝐝𝐦𝐢𝐧 !!!\n• 𝐅𝐁   ➝ https://www.facebook.com/100064829510922 ',
        "addedNewAdmin": '➝ 𝐌𝐎𝐃𝐄 •  𝚃𝚒𝚎̂́𝚗 𝙷𝚊̀𝚗𝚑 𝚃𝚑𝚊̆𝚗𝚐 𝚀𝚞𝚢𝚎̂̀𝚗 𝙰𝚍𝚖𝚒𝚗\n%2',
        "removedAdmin": '➝ 𝐌𝐎𝐃𝐄 •  𝚃𝚒𝚎̂́𝚗 𝙷𝚊̀𝚗𝚑 𝙷𝚊̣ 𝚀𝚞𝚢𝚎̂̀𝚗 𝙰𝚍𝚖𝚒𝚗\n%2'
    },
    "en": {
        "listAdmin": '[Admin] Admin list: \n\n%1',
        "notHavePermssion": '[Admin] You have no permission to use "%1"',
        "addedNewAdmin": '[Admin] Added %1 Admin :\n\n%2',
        "removedAdmin": '[Admin] Remove %1 Admin:\n\n%2'
    }
}
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const content = args.slice(1, args.length);
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT, NDH } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);

    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);

    switch (args[0]) {
        case "list":
        case "l":
        case "-l": {
        	listAdmin = ADMINBOT || config.ADMINBOT ||  [];
            var msg = [];
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                  const name = (await Users.getData(idAdmin)).name
                    msg.push(`▱▱▱▱▱▱▱▱\n[ 👤 ] ➝ ${name}\n• 𝐅𝐁   ➝ fb.me/${idAdmin}`);
                }
            }
          listNDH = NDH || config.NDH ||  [];
            var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`▱▱▱▱▱▱▱▱\n[ 👤 ] ➝${name1}\n• 𝐅𝐁   ➝ fb.me/${idNDH}`);
                }
            }

            return api.sendMessage(getText("listAdmin", msg.join("\n"), msg1.join("\n")), threadID, messageID);
        }
        
        case "add": {
            const permission = ["100064829510922",""];
             if (!permission.includes(event.senderID))
             return api.sendMessage("hông nha mắ ", event.threadID, event.messageID);
            if (permssion != 2) return api.sendMessage("[❗] ➝ 𝐇𝐢𝐞̣̂𝐧 𝐓𝐚̣𝐢 𝐁𝐚̣𝐧 𝐊𝐡𝐨̂𝐧𝐠 𝐂𝐨́ 𝐐𝐮𝐲𝐞̂̀𝐧 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 [ !admin add ]\n• 𝐍𝐚̂𝐧𝐠 𝐐𝐮𝐲𝐞̂̀𝐧 𝐇𝐚̣𝐧 𝐋𝐢𝐞̂𝐧 𝐇𝐞̣̂ 𝐀𝐝𝐦𝐢𝐧 !!!\n• 𝐅𝐁   ➝ https://www.facebook.com/100064829510922 ", threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `\n𝙽𝙰𝙼𝙴    ➣ ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
        case "remove":
        case "rm":
        case "delete": {
            if (event.senderID != 100064829510922) return api.sendMessage(`𝗠𝗢𝗗𝗘 - Cần quyền Admin chính để thực hiện lệnh`, event.threadID, event.messageID)
            if (permssion != 2) return api.sendMessage("[❗] ➝ 𝐇𝐢𝐞̣̂𝐧 𝐓𝐚̣𝐢 𝐁𝐚̣𝐧 𝐊𝐡𝐨̂𝐧𝐠 𝐂𝐨́ 𝐐𝐮𝐲𝐞̂̀𝐧 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 [ !admin rm ]\n• 𝐍𝐚̂𝐧𝐠 𝐐𝐮𝐲𝐞̂̀𝐧 𝐇𝐚̣𝐧 𝐋𝐢𝐞̂𝐧 𝐇𝐞̣̂ 𝐀𝐝𝐦𝐢𝐧 !!!\n• 𝐅𝐁   ➝ https://www.facebook.com/100064829510922 ", threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `[ ${content[0]} ] » ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }
        case 'boxonly': {
            if (permssion != 2) return api.sendMessage("[❗] ➝ 𝐇𝐢𝐞̣̂𝐧 𝐓𝐚̣𝐢 𝐁𝐚̣𝐧 𝐊𝐡𝐨̂𝐧𝐠 𝐂𝐨́ 𝐐𝐮𝐲𝐞̂̀𝐧 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 [ !admin onlybox ]\n• 𝐍𝐚̂𝐧𝐠 𝐐𝐮𝐲𝐞̂̀𝐧 𝐇𝐚̣𝐧 𝐋𝐢𝐞̂𝐧 𝐇𝐞̣̂ 𝐀𝐝𝐦𝐢𝐧 !!!\n• 𝐅𝐁   ➝ https://www.facebook.com/100064829510922 ", threadID, messageID);
        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;   
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("➝ 𝐌𝐎𝐃𝐄 •  𝙾𝙵𝙵 𝙾𝙽𝙻𝚈 𝙱𝙾𝚇", threadID, messageID);
        } else {
            adminbox[threadID] = true;
            api.sendMessage("➝ 𝐌𝐎𝐃𝐄 •  𝙾𝙽 𝙾𝙽𝙻𝚈 𝙱𝙾𝚇", threadID, messageID);
        }
        writeFileSync(pathData, JSON.stringify(database, null, 4));
        break;
        }
   case 'only':
   case '-o': {
        //---> CODE ADMIN ONLY<---//
        if (permssion != 2) return api.sendMessage("[❗] ➝ 𝐇𝐢𝐞̣̂𝐧 𝐓𝐚̣𝐢 𝐁𝐚̣𝐧 𝐊𝐡𝐨̂𝐧𝐠 𝐂𝐨́ 𝐐𝐮𝐲𝐞̂̀𝐧 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 [ !admin only ]\n• 𝐍𝐚̂𝐧𝐠 𝐐𝐮𝐲𝐞̂̀𝐧 𝐇𝐚̣𝐧 𝐋𝐢𝐞̂𝐧 𝐇𝐞̣̂ 𝐀𝐝𝐦𝐢𝐧 !!!\n• 𝐅𝐁   ➝ https://www.facebook.com/100064829510922 ", threadID, messageID);
        if (config.adminOnly == false) {
            config.adminOnly = true;
            api.sendMessage("➝ 𝐌𝐎𝐃𝐄 • • 𝙾𝙽 𝙰𝙳𝙼𝙸𝙽 𝙾𝙽𝙻𝚈", threadID, messageID);
        } else {
            config.adminOnly = false;
            api.sendMessage("➝ 𝐌𝐎𝐃𝐄 • • 𝙾𝙵𝙵 𝙰𝙳𝙼𝙸𝙽 𝙾𝙽𝙻𝚈", threadID, messageID);
        }
            writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
              break;
        }
    case 'c':
    case 'chat':
    case '-c': {
        //---> CODE ADMIN PERSONAL ONLY<---//
        if (permssion != 3) return api.sendMessage("[❗] ➝ 𝐇𝐢𝐞̣̂𝐧 𝐓𝐚̣𝐢 𝐁𝐚̣𝐧 𝐊𝐡𝐨̂𝐧𝐠 𝐂𝐨́ 𝐐𝐮𝐲𝐞̂̀𝐧 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 [ /admin chat ]\n• 𝐍𝐚̂𝐧𝐠 𝐐𝐮𝐲𝐞̂̀𝐧 𝐇𝐚̣𝐧 𝐋𝐢𝐞̂𝐧 𝐇𝐞̣̂ 𝐀𝐝𝐦𝐢𝐧 !!!\n• 𝐅𝐁   ➝ https://www.facebook.com/100064829510922 ", threadID, messageID);
        if (config.adminPersonalOnly == false) {
            config.adminPersonalOnly = true;
            api.sendMessage("➝ 𝐌𝐎𝐃𝐄 • • 𝙾𝙵𝙵 𝙸𝙱𝚁𝙸𝙴𝙽𝙶", threadID, messageID);
        } else {
            config.adminPersonalOnly = false;
            api.sendMessage("➝ 𝐌𝐎𝐃𝐄 • • 𝙾𝙽 𝙸𝙱𝚁𝙸𝙴𝙽𝙶", threadID, messageID);
        }
            writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
              break;
    }
    default: {
        return api.sendMessage("====『 𝐀𝐃𝐌𝐈𝐍  』====\n/𝐚𝐝𝐦𝐢𝐧 𝐚𝐝𝐝 \n➝ 𝐌𝐎𝐃𝐄 • 𝐓𝐡𝐞̂𝐦 𝐀𝐝𝐦𝐢𝐧 \n/𝐚𝐝𝐦𝐢𝐧 𝐫𝐦\n➝ 𝐌𝐎𝐃𝐄 • 𝐗𝐨𝐚́ 𝐀𝐝𝐦𝐢𝐧\n/𝐚𝐝𝐦𝐢𝐧 𝐥𝐢𝐬𝐭\n➝ 𝐌𝐎𝐃𝐄 • 𝐗𝐞𝐦 𝐃𝐚𝐧𝐡 𝐒𝐚́𝐜𝐡 𝐀𝐝𝐦𝐢𝐧\n/𝐚𝐝𝐦𝐢𝐧 𝐨𝐧𝐥𝐲\n➝ 𝐌𝐎𝐃𝐄 •『 𝐀𝐃  』 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 𝐁𝐨𝐭\n/𝐚𝐝𝐦𝐢𝐧 𝐛𝐨𝐱𝐨𝐧𝐥𝐲\n➝ 𝐌𝐎𝐃𝐄 •『 𝐐𝐓𝐕 - 𝐀𝐃  』 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 𝐁𝐨𝐭\n『 🌸  』• • • 🐲\n[❗] ➝ 𝐌𝐮𝐚 𝐅𝐢𝐥𝐞 𝐁𝐨𝐭 𝐋𝐢𝐞̂𝐧 𝐇𝐞̣̂ 𝐀𝐝𝐦𝐢𝐧 !!", threadID, messageID);
      }
}
}
// tui có cuti hoq?
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
