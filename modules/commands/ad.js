module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "✨..✨",
  description: "Kiểm tra thông tin admin .",
  commandCategory: "Tiện ích",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
    var name = (await Users.getData(event.senderID)).name
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.ibb.co/rZ7zR1V/t-i-xu-ng-1.jpg"
];
  var callback = () => api.sendMessage({body:`=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ====\n━━━━━━━━━━━━━━━━━━\n\n
🙈 𝐓𝐞̂𝐧: Lê Việt Anh 
🛸 𝐓𝐮𝐨̂̉𝐢: đéo bt
👤 𝐆𝐢𝐨̛́𝐢  đéo bt
💫 𝐂𝐡𝐢𝐞̂̀𝐮 𝐂𝐚𝐨 𝐂𝐚̂𝐧 𝐍𝐚̣̆𝐧𝐠:  đéo bt 
💻𝐂𝐨𝐧𝐭𝐚𝐜𝐭💻
☎ 𝐒đ𝐭&𝐙𝐚𝐥𝐨: 0812320307
🌐𝐅𝐛:https://www.facebook.com/100064829510922  
✉️ 𝐄𝐦𝐚𝐢𝐥: đeóbt
------------
🛸𝐃𝐨𝐧𝐚𝐭𝐞:
💳𝐕𝐂𝐁: 𝐂𝐡𝐮̛𝐚 𝐋𝐚̀𝐦:(
💳𝐌𝐁: 181818180880
📲𝐌𝐎𝐌𝐎: 0812320307`,attachment: fs.createReadStream(__dirname + "/cache/123ad.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/123ad.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/123ad.jpg")).on("close",() => callback());
   };
   //tự edit body nhá ...=thay thông tin 
   //Sen code lại th nên bớt soi 
   //cách lấy ảnh gắn ở trên 
   //B1 Truy cập https://imgur.com chọn newpost
   //B2 Gắn ảnh từ máy tính lên đó hay điện thoại cx đc tùyq   //B3 Copy link như trên rồi thêm .jpg vào là done 
   //Chúc thành công