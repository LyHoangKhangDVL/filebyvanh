 const axios = require("axios");
const fs = require("fs");
module.exports.config = {
    name: "cap",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Chụp ảnh profile của người dùng",
    commandCategory: "THÀNH VIÊN",
    usages: "",
    cooldowns: 5
}
module.exports.handleEvent = async ({ api, event, Threads, args, Users }) => {
  try{
  if(event.body.toLowerCase() == "cap"){
    const name = await Users.getNameUser(event.senderID)
    api.sendMessage(`Đợi tý đi ${name}!!`, event.threadID, event.messageID);
    if (event.type == "message_reply") {
      var uid = event.messageReply.senderID;
    } else if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `dpr=1.5;sb=6p-3ZB7A3kVnNCMdQuDqwKXw;datr=6p-3ZDm7swYrq1c6CbJViAF_;wd=1236x603;c_user=100064829510922;xs=30%3Auns0Mcsxj7i7GA%3A2%3A1690226303%3A-1%3A6290;fr=0b6JtRmG4xXDfoWqP.AWXmGONCa5Nn6CtGG-XOFRl0uDM.BkvsHw.ii.AAA.0.0.Bkvs6G.AWU2JJPtGww;presence=C%7B%22t3%22%3A%5B%7B%22o%22%3A0%2C%22i%22%3A%22g.6347596725277337%22%7D%5D%2C%22utc3%22%3A1690226332464%2C%22v%22%3A1%7D;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = ``;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=76ad65&url=${url}&dimension=1024x768`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `『 𝗖𝗔𝗣 𝗪𝗔𝗟𝗟 』\n \n━━━━━━━━━━\n 𝑨̂𝒚 𝒅𝒐̂ 𝒙𝒐𝒏𝒈 𝒓𝒐̂̀𝒊 𝒏𝒆̀ ${name} \n \n→ 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝗮𝗽`,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
  }
} catch(e){
    console.log(e)
}}
module.exports.run = async function ({ api,Users,event, args }) {
  const name = await Users.getNameUser(event.senderID)
    api.sendMessage(`Đợi tý đi ${name}!!`, event.threadID, event.messageID);
    var uid = String(args[0]);
    isNaN(uid) && (uid = Object.keys(event.mentions)[0], "message_reply" == event.type ? uid = event.messageReply.senderID : uid = event.senderID);
    var cookies = `dpr=1.5;sb=6p-3ZB7A3kVnNCMdQuDqwKXw;datr=6p-3ZDm7swYrq1c6CbJViAF_;wd=1236x603;c_user=100064829510922;xs=30%3Auns0Mcsxj7i7GA%3A2%3A1690226303%3A-1%3A6290;fr=0b6JtRmG4xXDfoWqP.AWXmGONCa5Nn6CtGG-XOFRl0uDM.BkvsHw.ii.AAA.0.0.Bkvs6G.AWU2JJPtGww;presence=C%7B%22t3%22%3A%5B%7B%22o%22%3A0%2C%22i%22%3A%22g.6347596725277337%22%7D%5D%2C%22utc3%22%3A1690226332464%2C%22v%22%3A1%7D;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = ``;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=76ad65&url=${url}&dimension=1024x768`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `『 𝗖𝗔𝗣 𝗪𝗔𝗟𝗟 』\n ━━━━━━━━━━\n Ây dô xong rồi nè ${name}\n → 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝗮𝗽`,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
      }