module.exports.config = {
    name: "slot",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Đánh bạc bằng hình thức hoa quả",
    commandCategory: "game-sp",
    usages: "[số coin cần đặt]",
    cooldowns: 5,
};

module.exports.languages = {
    "vi": {
        "missingInput": "[ SLOT ] Số tiền đặt cược không được để trống hoặc là số âm",
        "moneyBetNotEnough": "[ SLOT ] Số tiền bạn đặt lớn hơn hoặc bằng số dư của bạn!",
        "limitBet": "[ SLOT ] Số coin đặt không được dưới 50$!",
        "returnWin": "🎰 %1 | %2 | %3 🎰\nBạn đã thắng với %4$",
        "returnLose": "🎰 %1 | %2 | %3 🎰\nBạn đã thua và mất %4$"
    },
    "en": {
        "missingInput": "[ SLOT ] The bet money must not be blank or a negative number",
        "moneyBetNotEnough": "[ SLOT ] The money you betted is bigger than your balance!",
        "limitBet": "[ SLOT ] Your bet is too low, the minimum is 50$",
        "returnWin": "🎰 %1 | %2 | %3 🎰\nYou won with %4$",
        "returnLose": "🎰 %1 | %2 | %3 🎰\nYou lost and loss %4$"
    }
}
async function getIMG(item1, item2, item3){
  try{
  console.log({item1, item2, item3})
    if(item1 == "🍇") item1 = "https://imgur.com/jWmzlgG.png";
    if(item1 == "🍉") item1 = "https://imgur.com/FmWC4eK.png";
    if(item1 == "🍊") item1 = "https://imgur.com/gaUbeiY.png";
    if(item1 == "🍏") item1 = "https://imgur.com/gyztTV3.png";
    if(item1 == "7⃣") item1 = "https://imgur.com/IqU7tlM.png";
    if(item1 == "🍓") item1 = "https://imgur.com/gQtvMRq.png";
    if(item1 == "🍒") item1 = "https://imgur.com/Q0PZJGq.png";
    if(item1 == "🍌") item1 = "https://imgur.com/kH7VSr3.png";
    if(item1 == "🥝") item1 = "https://imgur.com/1qo4T8o.png";
    if(item1 == "🥑") item1 = "https://imgur.com/HcExpOY.png";
    if(item1 == "🌽") item1 = "https://imgur.com/mjlUTQJ.png";
    if(item2 == "🍇") item2 = "https://imgur.com/jWmzlgG.png";
    if(item2 == "🍉") item2 = "https://imgur.com/FmWC4eK.png";
    if(item2 == "🍊") item2 = "https://imgur.com/gaUbeiY.png";
    if(item2 == "🍏") item2 = "https://imgur.com/gyztTV3.png";
    if(item2 == "7⃣") item2 = "https://imgur.com/IqU7tlM.png";
    if(item2 == "🍓") item2 = "https://imgur.com/gQtvMRq.png";
    if(item2 == "🍒") item2 = "https://imgur.com/Q0PZJGq.png";
    if(item2 == "🍌") item2 = "https://imgur.com/kH7VSr3.png";
    if(item2 == "🥝") item2 = "https://imgur.com/1qo4T8o.png";
    if(item2 == "🥑") item2 = "https://imgur.com/HcExpOY.png";
    if(item2 == "🌽") item2 = "https://imgur.com/mjlUTQJ.png";
    if(item3 == "🍇") item3 = "https://imgur.com/jWmzlgG.png";
    if(item3 == "🍉") item3 = "https://imgur.com/FmWC4eK.png";
    if(item3 == "🍊") item3 = "https://imgur.com/gaUbeiY.png";
    if(item3 == "🍏") item3 = "https://imgur.com/gyztTV3.png";
    if(item3 == "7⃣") item3 = "https://imgur.com/IqU7tlM.png";
    if(item3 == "🍓") item3 = "https://imgur.com/gQtvMRq.png";
    if(item3 == "🍒") item3 = "https://imgur.com/Q0PZJGq.png";
    if(item3 == "🍌") item3 = "https://imgur.com/kH7VSr3.png";
    if(item3 == "🥝") item3 = "https://imgur.com/1qo4T8o.png";
    if(item3 == "🥑") item3 = "https://imgur.com/HcExpOY.png";
    if(item3 == "🌽") item3 = "https://imgur.com/mjlUTQJ.png";
    return [item1, item2, item3];
  }
  catch(e){
    return e
  }
}
module.exports.run = async function({ api, event, args, Currencies, getText }) {
    const { threadID, messageID, senderID } = event;
    const { getData, increaseMoney, decreaseMoney } = Currencies;
    const slotItems = ["🍇", "🍉", "🍊", "🍏", "7⃣", "🍓", "🍒", "🍌", "🥝", "🥑", "🌽"];
    const moneyUser = (await getData(senderID)).money;
    var img = []
    var moneyBet = parseInt(args[0]);
    if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage(getText("missingInput"), threadID, messageID);
	if (moneyBet > moneyUser) return api.sendMessage(getText("moneyBetNotEnough"), threadID, messageID);
	if (moneyBet < 50) return api.sendMessage(getText("limitBet"), threadID, messageID);
    var number = [], win = false;
    for (i = 0; i < 3; i++) number[i] = Math.floor(Math.random() * slotItems.length);
    var img1 = await getIMG(slotItems[number[0]] , slotItems[number[1]] , slotItems[number[2]]);
    for (i = 0; i < 3; i++) {
      const t = (await require('axios').get(`${img1[i]}`, {
                    responseType: "stream"
                }))
                .data;
            img.push(t)
    }
   if(number[0] == "7⃣" && number[1] == "7⃣" && number[2] == "7⃣"){
    moneyBet *= 12;
    win = true;
  }
  else  if (number[0] == number[1] && number[1] == number[2]) {
        moneyBet *= 9;
        win = true;
    }
    else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
        moneyBet *= 9999999999999;
        win = true;
    }

    switch (win) {
        case true: {
          api.sendMessage({
            body: `=== [ 𝐌𝐈𝐍𝐈 𝐆𝐀𝐌𝐄 ] ===\n➝ 𝐊𝐞̂́𝐭 𝐐𝐮𝐚̉: • | ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} | •\n[ 🕹️ ] ➝ 𝐁𝐚̣𝐧 𝐓𝐡𝐚̆́𝐧𝐠 ( 𝐖𝐢𝐧 )\n➝ 𝐋𝐨𝐬𝐭:  ${moneyBet} ( 💸 )\n➝ 𝐌𝐨𝐧𝐞𝐲: ${moneyUser} ( 💵 )\n==================`, 
            attachment: img
          }, threadID, messageID)
            await increaseMoney(senderID, moneyBet);
            break;
        }
        case false: {
           api.sendMessage({
            body: `=== [ 𝐌𝐈𝐍𝐈 𝐆𝐀𝐌𝐄 ] ===\n➝ 𝐊𝐞̂́𝐭 𝐐𝐮𝐚̉: • | ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} | •\n[ 🕹️ ] ➝ 𝐁𝐚̣𝐧 𝐓𝐡𝐮𝐚 ( 𝐋𝐨𝐬𝐞 )\n➝ 𝐋𝐨𝐬𝐭: - ${moneyBet} ( 💸 )\n➝ 𝐌𝐨𝐧𝐞𝐲: ${moneyUser} ( 💵 )\n==================`, 
            attachment: img
          }, threadID, messageID)
            await decreaseMoney(senderID, moneyBet);
            break;
        }
    }
}