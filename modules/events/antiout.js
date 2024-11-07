module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
   const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "tự rời" : "bị quản trị viên đá";
 if (type == "tự rời") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`Madara ta thất bại trong việc bắt giữ người rồi...\n• 𝐓𝐆       ➝ ${timeNow} `, event.threadID)
   } else api.sendMessage(`Mong muốn hòa bình trong khi tay đang nhuốm máu là điều chỉ có ở loài người. Giống như hai mặt của một đồng xu ,muốn bảo vệ điều gì thì phải níu kéo điều đó ở lại\n• 𝐓𝐆       ➝ ${timeNow}`, event.threadID);
  })
 }
}