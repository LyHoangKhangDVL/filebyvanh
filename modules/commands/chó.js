module.exports.config = {
  name: "chó",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "vanh",
  description: "ảnh chó sủa",
  commandCategory: "Make by vanh",
  usages: "",
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
"https://i.ibb.co/HKZRYKK/Screenshot-173.png",
    

  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("nạp vip đi để xem ảnh?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 0})
   var callback = () => api.sendMessage({body:`ê ê thấy con chó sủa nè`,attachment: fs.createReadStream(__dirname + "/cache/chó123.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/chó123.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/chó123.jpg")).on("close",() => callback());
   }
};