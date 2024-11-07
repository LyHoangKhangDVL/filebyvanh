 module.exports.config = {
  name: "reg",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "ProCoderCyrus",//Mod by H.Thanh
  description: "Các cài đặt của nhóm",
  commandCategory: "Box",
  usages: "< id/name/setnamebox/emoji/me setqtv/setqtv/image/info/new/taobinhchon/setname/setnameall/rdcolor >",
  cooldowns: 1,
 };

module.exports.run = async ({ event, api, args, Threads, mentions }) => {
  const request = require("request");
  var id = [event.senderID] || [];
  var main = event.body;
  var groupTitle = main.slice(main.indexOf("|") +2)
  if (args[0] == "new") {
   for (var i = 0; i < Object.keys(event.mentions).length; i++) 
id.push(Object.keys(event.mentions)[i]);
  api.createNewGroup(id, groupTitle,() => {
    api.sendMessage(`Đã tạo nhóm ${groupTitle}`, event.threadID)
  })
}