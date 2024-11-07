module.exports.config = {
  name: "bot",
  version: "1.2.0",
  hasPermssion: 0,
  credits: "Lmao tủn tủn",
  description: "nhắc bot cái ầu uồi:)))",
  commandCategory: "Bổ não",
  usages: "[trống]",
  cooldowns: 5
}

module.exports.handleEvent = async ({ api, event, Users }) => {
  const cc = [
"\n======>PAIN THIÊN ĐẠO<======\nMột người không biết nỗi đau là gì sẽ không biết độc lập thực sự có nghĩa là gì.","\n======>PAIN THIÊN ĐẠO<======\nNếu ngươi muốn hiểu và hiểu nhau, hãy khiến đối thủ của ngươi cảm thấy như vậy","\n======>PAIN THIÊN ĐẠO<======\nĐau khổ làm ngươi mạnh mẽ hơn","\n======>PAIN THIÊN ĐẠO<======\nNếu hận thù được gọi là công lý, thì công lý sẽ sinh ra để trả thù và trở thành một chuỗi hận thù","\n======>PAIN THIÊN ĐẠO<======\nNgười chỉ muốn bảo vệ họ, mặc dù ngươi phải trải qua đau khổ","n======>PAIN THIÊN ĐẠO<======\nCon người làm đau người khác mà thậm chí còn không nhận ra điều đó. Do đó mà chừng nào con người còn tồn tại, chừng đó thù hận còn tồn tại","\n======>PAIN THIÊN ĐẠO<======\nChiến tranh đem đến nỗi đau và thương vong cho cả hai phía","\n======>PAIN THIÊN ĐẠO<======\nNỗi đau là con đường đem đến hòa bình","\n======>PAIN THIÊN ĐẠO<======\nNhững kẻ không hề biết đến nỗi đau đớn thực sự sẽ không bao giờ biết đến hòa bình thực sự"
    ];
  let name = await Users.getNameUser(event.senderID)
  if (event.body.toLowerCase() == "bot"){ 
    return api.sendMessage(
      name + ` ${cc[Math.floor(Math.random() * cc.length)]}`
      , event.threadID, event.messageID)
  }
  
}

module.exports.run = async ({ api, event, Users }) => {
  let name = await Users.getNameUser(event.senderID)
  return api.sendMessage(name + ' biết xài không hả', event.threadID, event.messageID)
}
