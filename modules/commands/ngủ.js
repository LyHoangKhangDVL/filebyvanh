module.exports.config = {
    name: "ngủ",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Lê Định",
    description: "Bot sẽ chúc bạn ngủ ngon",
    commandCategory: "Noprefix",
    usages: "",
    cooldowns: 10,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "ngủ.gif")) request("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDNrMHpnM3U4cjY4b2c0eWdhMTl1MW85NTA1cmhhdW00YmR1MGk0dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9ni8e5if07DxcsSq82/giphy.gif").pipe(fs.createWriteStream(dirMaterial + "ngủ.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `[ 𝐆𝐨𝐨𝐝 𝐍𝐢𝐠𝐡𝐭 ]\n🌱𝐂𝐡𝐮́𝐜 ${name} 𝐍𝐠𝐮̉ 𝐍𝐠𝐨𝐧🛌`,
                attachment: fs.createReadStream(__dirname + `/noprefix/ngủ.gif`)
            }
    if (event.body.toLowerCase() == "đi ngủ đây"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngủ thôi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngủ"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "đi ngủ nha"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngủ đi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngủ ngon"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
   if (event.body.toLowerCase() == "ngủ nhanh"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }