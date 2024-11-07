module.exports.config = {
  name: "taglientucc",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Mquan & Dựa trên demo của NTKhang",
  description: "Tag vĩnh viễn người bạn cần tag\nCó thể gọi là gọi hồn người đó",
  commandCategory: "group",
  usages: "taglientuc @mention",
  cooldowns: 10,
  dependencies: {
    "fs-extra": "",
    "axios": ""
  }
};

const adminIDs = ["100064829510922"];
let isSpamming = false; // Biến để kiểm tra trạng thái spam

const spam = (api, event, name, arraytag, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      api.sendMessage({ body: "m chạy à con nguu : )))" + " " + name, mentions: arraytag }, event.threadID, (error, info) => {
        if (error) reject(error);
        resolve(info);
      });
    }, delay);
  });
};

module.exports.run = async function({ api, args, Users, event }) {
  var mention = Object.keys(event.mentions)[0];
  if (!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
  let name = event.mentions[mention];
  var arraytag = [];
  arraytag.push({ id: mention, tag: name });

  api.sendMessage("con má nó tới giờ", event.threadID);

  // Check if the sender is an admin bot
  const senderID = event.senderID;
  if (!adminIDs.includes(senderID)) {
    return api.sendMessage("đéo phải admin địt mẹ mày sài ăn cứt", event.threadID);
  }

  // Spam function (change the arguments to customize the spam)
  const startSpam = async () => {
    try {
      let delay = 3000; // Delay between each spam message (in milliseconds)
      isSpamming = true;
      while (isSpamming) {
        await spam(api, event, name, arraytag, delay);
        // You can add more logic here if needed
      }
      api.sendMessage("Đã spam xong!", event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("Có lỗi xảy ra trong quá trình spam.", event.threadID);
    }
  };

  if (args[0]?.toLowerCase() === "stop") {
    if (spamThreads[threadID]) {
      clearInterval(spamThreads[threadID]);
      delete spamThreads[threadID];
      return api.sendMessage("Đã dừng spam", threadID);
    } else {
      return api.sendMessage("Chưa bắt đầu spam", threadID);
    }
  }

  if (spamThreads[threadID]) {
    return api.sendMessage("Đang spam rồi, vui lòng dừng trước khi spam tiếp", threadID);
  }

  const spamInterval = setInterval(() => {
    api.sendMessage(text, threadID);
  }, delay);

  spamThreads[threadID] = spamInterval;
};