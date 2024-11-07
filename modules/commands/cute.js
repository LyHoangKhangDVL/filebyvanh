module.exports.config = {
  name: "cute",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "vanh",
  description: "Random Ảnh Huyền cute",
  commandCategory: "make by vanh",
  usages: "cute",
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
"https://i.ibb.co/7XJr7MC/ce87284414ddb1c3e23e50ab4c2283a8-0.jpg",
"https://i.ibb.co/N2T92Hv/209b427791d6b5f8729af39b87fd17a2-0.jpg",
"https://i.ibb.co/3YXqj0V/9b0c71e768ffa50f1d620149fe31c186-0.jpg",
    "https://i.imgur.com/EArpcQ2.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 5000) api.sendMessage("Bạn cần 5000 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 5000})
   var callback = () => api.sendMessage({body:`Ô ô m thích huyền xinh gái à hay sao mà soi\n» Phí xem huyền cực xinh: -5000 đô «`,attachment: fs.createReadStream(__dirname + "/cache/huyencutexinh.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/huyencutexinh.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/huyencutexinh.jpg")).on("close",() => callback());
   }
};