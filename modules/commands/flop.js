module.exports.config = {
    name: "flop",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "",
    description: "Flop box",
    commandCategory: "𝐆𝐫𝐨𝐮𝐩𝐬",
    usages: "",
    cooldowns: 0
};

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
module.exports.run = async function({ event, api, global, Config, logger, Threads, Users, args }) {
  const { participantIDs } = await api.getThreadInfo(event.threadID)
  const botID = api.getCurrentUserID();
  const listUserID = participantIDs.filter(ID => ID != botID);
  return api.getThreadInfo(event.threadID, (err, info) => {
    if (err) return api.sendMessage("» Có lỗi xảy ra!", event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID()))
      return api.sendMessage(`» Cần quyền quản trị nhóm\nVui lòng thêm và thử lại!`, event.threadID, event.messageID);
    if (info.adminIDs.some(item => item.id == event.senderID)) {
      setTimeout(function() { api.removeUserFromGroup(botID, event.threadID) }, 300000);
      return api.sendMessage(`» Bắt đầu flop`, event.threadID, async (error, info) => {
        for (let id in listUserID) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          api.removeUserFromGroup(listUserID[id], event.threadID)
        }
      })
    } else return api.sendMessage('» Chỉ quản trị viên nhóm mới có thể sử dụng lệnh này!', event.threadID, event.messageID);
  })
}