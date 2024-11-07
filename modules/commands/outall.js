module.exports.config = {
  name: "outall",
  version: "1.0.0", 
  hasPermssion: 2,
  credits: "Mirai được mod lại bởi Lý Hảii", /* vui lòng k sửa credit :) */
  description: "out all box",
  commandCategory: "𝐀𝐝𝐦𝐢𝐧",
  usages: "outall [Text]",
  cooldowns: 5,
};
module.exports.run = async ({ api, event, args }) => {

 const permission = ["100064829510922","","",""];
    if (!permission.includes(event.senderID)) return api.sendMessage("Xin cái tuổi để outall?", event.threadID, event.messageID);
 return api.getThreadList(100, null, ["INBOX"], (err, list) => {
    if (err) throw err;
    list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ?
      api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
    api.sendMessage(' Đã out all box thành công', event.threadID);
  });
}
