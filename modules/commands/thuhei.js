module.exports.config = {
  name: "gaixinh",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "vanh",
  description: "random ảnh gái xinh cực gắt",
  commandCategory: "Make by vanh",
  usages: "gaixinh",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.ibb.co/F7fvCt0/IMG-20230709-070731.jpg",
"https://i.ibb.co/znRjd5F/IMG-20230709-065712.jpg",
"https://i.ibb.co/JxvRkFh/IMG-20230709-065716.jpg",
"https://i.ibb.co/QMJYXYX/IMG-20230709-065714.jpg",
"https://i.ibb.co/sC89GFw/IMG-20230709-065722.jpg",
"https://i.ibb.co/cDxJDbb/IMG-20230709-065719.jpg",
"https://i.ibb.co/FJC8x4p/IMG-20230709-065726.jpg",
"https://i.ibb.co/52wvXkR/IMG-20230709-065725.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 5000) api.sendMessage("Bạn cần 5000 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 5000})
   var callback = () => api.sendMessage({body:`Thèm gái xinh à??\n» Số dư: -5000 đô «`,attachment: fs.createReadStream(__dirname + "/cache/879.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/879.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/879.jpg")).on("close",() => callback());
   }
};