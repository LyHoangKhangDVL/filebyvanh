/*
*/
const fs = require("fs");
module.exports.config = {
    name:"work",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Akira",
    description: "làm việc kiếm tiền cùng bot",
    commandCategory: "kiếm tiền",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 320000
    },
    denpendencies: {
        "fs": "",
        "request": ""
}
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "work.png")) request("https://i.imgur.com/Aws2q6D.gif").pipe(fs.createWriteStream(dirMaterial + "work.png"));
}
module.exports.handleReply = async ({ 
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    let data = (await Currencies.getData(senderID)).data || {};
if (handleReply.author != e.senderID) 
return api.sendMessage("⚡đ𝐢̣𝐧𝐡 𝐛𝐮𝐠 𝐧𝐮̛̃𝐚 𝐡𝐚̉,𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐨́ đ𝐚̂𝐮 𝐧𝐡𝐚🎃!", e.threadID, e.messageID)

var a = Math.floor(Math.random() * 200000) + 50000; 
var b = Math.floor(Math.random() * 200000) + 50000; 
var c = Math.floor(Math.random() * 200000) + 50000; 
var x = Math.floor(Math.random() * 200000) + 50000; 
var y = Math.floor(Math.random() * 200000) + 50000; 
var f = Math.floor(Math.random() * 200000) + 50000; 

  var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            var t = Date.parse("") - Date.parse(new Date()),
            m = Math.floor( (t/00/60) % 60 ),
            h = Math.floor( (t/(00*60*60)) % 24 ),
            d = Math.floor( t/(00*60*60*24) ); 
           
            switch(e.body) {
                case "1": msg = ` bạn vừa làm 𝐬𝐡𝐢𝐩𝐞𝐫 𝐏𝐢𝐳𝐳𝐚 và kiếm về ${a} 𝐕𝐍𝐃`;
                await Currencies.increaseMoney(e.senderID, parseInt(a)); 
                break;             
                case "2": msg = ` bạn vừa 𝐥à𝐦 người bảo vệ ở 𝐪𝐮á𝐧 𝐁𝐚𝐫 và kiếm về ${b} 𝐕𝐍𝐃`; 
                await Currencies.increaseMoney(e.senderID, parseInt(b)); 
                break;
                case "3": msg = ` bạn vừa khai 𝙩𝙝á𝙘 đượ𝙘 𝙌𝙪ặ𝙣𝙜 và bán được ${c} 𝐕𝐍𝐃`; 
                await Currencies.increaseMoney(e.senderID, parseInt(c)); 
                break;
                case "4": msg = ` bạn vừa giúp chị Hai hái cam Mỹ và kiếm về ${x} 𝐕𝐍𝐃🎃`; 
                await Currencies.increaseMoney(e.senderID, parseInt(x)); 
                break;
                case "5": msg = ` bạn vừa 𝐥à𝐦 𝐭𝐡𝐮ê 𝐭𝐫ở 𝐡à𝐧𝐠 𝐜ấ𝐦 và kiếm về ${y} 𝐕𝐍𝐃`; 
                await Currencies.increaseMoney(e.senderID, parseInt(y)); 
                break;
                case "6": msg = ` bạn vừa 𝖌𝖎ú𝖕 𝖆𝖓𝖍 𝕭𝖆 kiếm về 3 tô cơm và được trả ${f} 𝐕𝐍𝐃`; 
                await Currencies.increaseMoney(e.senderID, parseInt(f)); 
                break;
                attachment: fs.createReadStream(__dirname + `/cache/work.png`)
                default: break;
            };
            const choose = parseInt(e.body);
            if (isNaN(e.body)) 
            return api.sendMessage("⚡вạɴ pнảι ɴнập тнeo тнứ тự ɴнé!🎃", e.threadID, e.messageID);
            if (choose > 6 || choose < 1) 
            return api.sendMessage("⚡𝐒ố 𝐦à 𝐛ạ𝐧 𝐜𝐡ọ𝐧 𝐤𝐡ô𝐧𝐠 𝐧ằ𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬á𝐜𝐡🎃", e.threadID, e.messageID);
          attachment: fs.createReadStream(__dirname + `/cache/work.png`)
            api.unsendMessage(handleReply.messageID);
            if (msg == "...") {
                msg = "...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}


module.exports.run = async ({  
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    var   t = Date.parse("") - Date.parse(new Date()),
    d = Math.floor( t/(10*60*00) ),
    h = Math.floor( (t/(10*60*00)) % 00 ),
    m = Math.floor( (t/10/60) % 00 );

    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            hours = Math.floor((time / (10* 60 ))/00),
            minutes = Math.floor(time / 10),
            seconds = ((time % 30) / 00).toFixed(0); 
        return api.sendMessage(`⚡𝑩𝒂̣𝒏 𝒗𝒖̛̀𝒂 làm 𝒙𝒐𝒏𝒈 𝒏𝒈𝒉𝒊̉ 𝒏𝒈𝒐̛𝒊 𝒅𝒖̛𝒐̛̃𝒏𝒈 𝒔𝒖̛́𝒄 đ𝒊!`, e.threadID, e.messageID);
    }
    else {    
        var msg = {
            body: "===💶𝐊𝐈Ế𝐌 𝐓𝐈Ề𝐍💵==="+`\n`+
                "\n1 ≻ 𝐥à𝐦 𝐒𝐡𝐢𝐩𝐩𝐞𝐫🍕" +
                "\n2 ≻ 𝓵à𝓶 Bảo vệ ở 𝓑𝓪𝓻💒" +
                "\n3 ≻ 𝐊𝐡𝐚𝐢 𝐭𝐡á𝐜 𝐪𝐮ặ𝐧𝐠⛏" +
                "\n4 ≻ Giúp chị Hai hái cam mỹ" +
                "\n5 ≻ 𝐥à𝐦 𝐭𝐫𝐮𝐜𝐤𝐞𝐫🚚" +
                "\n6 ≻ 𝘨𝘪ú𝘱 𝘷𝘪ệ𝘤 𝘢𝘯𝘩 𝘉𝘢😥" +
                `\n\n📌𝑹𝒆𝒑𝒍𝒚 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 𝒏𝒂̀𝒚 𝒕𝒉𝒆𝒐 𝒔𝒐̂́ đ𝒆̂̉ 𝒄𝒉𝒐̣𝒏🎃!`,
                attachment: fs.createReadStream(__dirname + `/cache/work.png`)}
                return api.sendMessage(msg,e.threadID,  (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: e.senderID,
            messageID: info.messageID
          })  
        })
    }
  }
