module.exports.config = {
  name: "cuti",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "vanh",
  description: "Random Ảnh hồng thương cuti",
  commandCategory: "make by vanh",
  usages: "cuti",
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
"https://i.ibb.co/YRBSNZC/359559223-6710267359005244-3996559852246626657-n.jpg",
"https://i.ibb.co/8cYJyDP/358489960-688375703112324-4225811678566055009-n.jpg",
"https://i.ibb.co/vj1dFVn/359686644-1031741087984382-5314831878912197901-n.jpg",
"https://i.ibb.co/VC2f1DY/359674429-126673543768836-3816668131560069476-n.jpg",
"https://i.ibb.co/SQJ1Bcm/356184385-596812839102691-7785502448338914480-n.jpg",
"https://i.ibb.co/Lxv2T4S/358504292-249392834473483-5184920415013697086-n.jpg",
"https://i.ibb.co/yBFhzns/356196247-159726363784666-5567085869747430083-n.jpg",
"https://i.ibb.co/2sfDG4s/356183968-797435688706148-1749693519951970723-n.jpg",
"https://i.ibb.co/G3ZPp5C/359801296-961712851708939-3848406642317415258-n.jpg",
"https://i.ibb.co/D954TLc/358822594-970790510838163-1893807665627323977-n.jpg",
 "https://i.ibb.co/gPmtBDQ/358157823-609330584636584-8599781299207233336-n.jpg",
 "https://i.ibb.co/3NMB9RD/358500614-589953086620223-2802521638306468731-n.jpg",
 "https://i.ibb.co/vLYKgCy/359668255-255658330506066-1538632025856954389-n.jpg",
 "https://i.ibb.co/618TXkn/359682395-286248180551452-5067311521909846336-n.jpg",
 "https://i.ibb.co/SQwQQsX/357762719-1492275401572473-5662766279298591567-n.jpg",
 "https://i.ibb.co/qYq6S7S/357601573-149724028123338-4718630543424691543-n.jpg",
 "https://i.ibb.co/nQdyrrt/358585946-840788720983989-6361852202957015857-n.jpg",
 "https://i.ibb.co/6HKwZR2/356228848-587356386874236-991591839618068912-n.jpg",
 "https://i.ibb.co/FDJ720Y/359675404-773116694495903-1716387713272216353-n.jpg",
 "https://i.ibb.co/smZPQkb/359821982-565540815570403-6003639743083106979-n-1.jpg",
 "https://i.ibb.co/T4wX34Y/355199781-788484142739810-770617382982051484-n.jpg",
 "https://i.ibb.co/H2610b2/356186654-1035757381139020-176585705173177008-n.jpg",
 "https://i.ibb.co/Msb6qJw/357678027-1500076827397311-7756656740203994837-n.jpg",
 "https://i.ibb.co/d6ckx2M/359651979-1698559910568142-3137125026539494460-n.jpg",
 "https://i.ibb.co/j3r4GXh/356184987-233402426229588-2442127165408701253-n.jpg",
 "https://i.ibb.co/BgXk8Pt/356199326-844448989898858-9150994391362141311-n.jpg",
 "https://i.ibb.co/yqG5HbC/356188511-6083649771745548-6646652592694190305-n.jpg",
 "https://i.ibb.co/Qdk1XWf/358822594-801504328313703-1860984946690388222-n.jpg",
 "https://i.ibb.co/0GBBQQL/356186170-1016536596004112-333993303113015181-n.jpg",
 "https://i.ibb.co/DCqm2GJ/356189584-1392598757976919-5557503949180305268-n.jpg",
 "https://i.ibb.co/qB3TBfS/356194931-664165962239351-6837985123282377301-n.jpg",
 "https://i.ibb.co/rFPNHmx/356209626-830007694863137-1451792958852950930-n.jpg",
 "https://i.ibb.co/sFwmKbV/358804554-3711301875769742-8413945503024649937-n.jpg",
 "https://i.ibb.co/4RQ6qtQ/359662634-300382259115585-4539752620599545345-n.jpg",
 "https://i.ibb.co/Pw9R3FV/356248963-652082946967561-7502962925426020917-n.jpg",
"https://i.imgur.com/UfRSRCe.jpeg",
"https://i.imgur.com/UZSg2TI.jpeg",
"https://i.imgur.com/Y1WNQkD.jpeg",
"https://i.imgur.com/vCBNGn0.jpeg",
"https://i.imgur.com/DqUZrRu.jpeg",
"https://i.imgur.com/RkrGwNu.jpeg",
"https://i.imgur.com/xpO1NhI.jpeg",
"https://i.imgur.com/ge39Ga2.jpeg",
"https://i.imgur.com/gVqCCEm.jpeg",
"https://i.imgur.com/GteRruZ.jpeg",
"https://i.imgur.com/imYdnKN.jpeg",
"https://i.imgur.com/ADZeOpn.jpeg",
"https://i.imgur.com/rV6q5zD.jpeg",
"https://i.imgur.com/7RYlRjy.jpeg",
"https://i.imgur.com/JNrGD9k.jpeg",
"https://i.imgur.com/YlbhhFy.jpeg",
"https://i.imgur.com/HmZhP2K.jpeg",
"https://i.imgur.com/GqbMQTO.jpeg",
"https://i.imgur.com/rLJqpPb.jpeg",
"https://i.imgur.com/1pt8YsT.jpeg",
"https://i.imgur.com/JY96s7c.jpeg",
"https://i.imgur.com/Skfkf8w.jpeg",
"https://i.imgur.com/NMnzYJT.jpeg",
"https://i.imgur.com/YVE4t5m.jpeg",
"https://i.imgur.com/k5sE5aY.jpeg",
"https://i.imgur.com/nQHi7Ga.jpeg",
"https://i.imgur.com/UJggF8y.jpeg",
"https://i.imgur.com/NELvNQB.jpeg",
"https://i.imgur.com/gdFik8F.jpeg",
"https://i.imgur.com/hYEubO7.jpeg",
"https://i.imgur.com/Y0LgzUI.jpeg",
"https://i.imgur.com/Gr7ZF2P.jpeg",
"https://i.imgur.com/TFNCOpJ.jpeg",
"https://i.imgur.com/60u2DAE.jpeg",
"https://i.imgur.com/Y7IA92B.jpeg",
"https://i.imgur.com/5qgPApO.jpeg",
"https://i.imgur.com/n7RbGs3.jpeg",
"https://i.imgur.com/aNRMybU.jpeg",
"https://i.imgur.com/1aeY5JW.jpeg",
"https://i.imgur.com/LkjnY8j.jpeg",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 5000) api.sendMessage("Bạn cần 5000 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 5000})
   var callback = () => api.sendMessage({body:`Hở ra là đòi xem ảnh hồng thương vậy?? mê à\n» Số dư: -5000 đô «`,attachment: fs.createReadStream(__dirname + "/cache/hthuong.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/hthuong.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/hthuong.jpg")).on("close",() => callback());
   }
};