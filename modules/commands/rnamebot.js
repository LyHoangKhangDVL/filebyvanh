module.exports.config = {
    name: "rnamebot",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "CatalizCS",
    description: "Đổi biệt danh của bot ở toàn bộ bot!",
    commandCategory: "ADMIN",
    usages: "[Biệt danh cần đặt]",
    cooldowns: 2,
};

module.exports.run = async ({ event, api, global, args, Threads, client }) => {
    const custom = args.join(" "),
            allThread = await Threads.getAll(["threadID"]),
            idBot = api.getCurrentUserID();
    var threadError = [],
        count = 0;
    if (custom.length != 0) {
        for (const idThread of allThread) {
            api.changeNickname(custom, idThread.threadID, idBot, (err) => (err) ? threadError.push(idThread.threadID) : '');
            count+=1;
await new Promise(resolve => setTimeout(resolve, 500));
        }
return api.sendMessage(`Đ𝐚̃ đ𝐨̂̉𝐢 𝐭𝐞̂𝐧 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐨 ${count} 𝐧𝐡𝐨́𝐦`, event.threadID, () => {
if (threadError != 0) return api.sendMessage("[!] 𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ đ𝐨̂̉𝐢 𝐭𝐞̂𝐧 𝐭𝐚̣𝐢" + threadError.lenght + " 𝐧𝐡𝐨́𝐦",event.threadID, event.messageID)
        }, event.messageID);
    }
    else {
for (const idThread of allThread) {
const threadSetting = client.threadSetting.get(idThread.threadID) || {};
api.changeNickname(`[ ${(threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, 
idThread.threadID, idBot, (err) => (err) ? threadError.push(idThread.threadID) : '');
            count+=1;
await new Promise(resolve => setTimeout(resolve, 500));
        }
 return api.sendMessage(`Đ𝐚̃ đ𝐨̂̉𝐢 𝐭𝐞̂𝐧 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐨 ${count} 𝐧𝐡𝐨́𝐦`, event.threadID, () => {
if (threadError != 0) return api.sendMessage("[!] 𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ đ𝐨̂̉𝐢 𝐭𝐞̂𝐧 𝐭𝐚̣𝐢 " + threadError.length + " 𝐧𝐡𝐨́𝐦",event.threadID, event.messageID)
        }, event.messageID);
    }
}