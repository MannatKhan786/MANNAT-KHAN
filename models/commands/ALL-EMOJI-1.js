const fs = require("fs");
module.exports.config = {
          name: "AUTO-EMOJI-1",
        version: "1.0.1",
          hasPermssion: 0,
          credits: "John Lester", 
          description: "No Prefix",
          commandCategory: "no prefix",
        cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
 let haha = event.body.toLowerCase();
  if (haha.includes("☘️") || haha.includes("😂") || haha.includes("🥰") || haha.includes("🌺") || haha.includes("❤️‍🩹") || haha.includes("😌") || haha.includes("❤️‍🩹") || haha.includes("🍒") || haha.includes("😊") || haha.includes("💜") || 
haha.includes("❤️") || haha.includes("❤️‍🩹") || haha.includes("😎") || haha.includes("😑") || haha.includes("😇")){                 
    return api.setMessageReaction("🌺", event.messageID, (err) => {}, true)
    api.markAsSeen(1, (err) => {});
  }
    if (haha.includes("❤️‍🩹") || haha.includes("🤐") || haha.includes("😏") || haha.includes("☹️") || haha.includes("🤧") || haha.includes("🙄") || haha.includes("🤗") || haha.includes("😢") || haha.includes("😋") || haha.includes("🥴") || haha.includes("😎")){
      return  api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true);
}
  if (haha.includes("😈") || haha.includes("🤬") || haha.includes("💋") || haha.includes("😻") || haha.includes("😮") || haha.includes("☹️") || haha.includes("🥸") || haha.includes("😟") || haha.includes("🥱") || haha.includes("☠️") || haha.includes("😾") || haha.includes("❤️‍🩹")){
    return api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
  }
  if (haha.includes("bot i love you") || haha.includes("Bot love you")){
    api.sendMessage("🌺✨", event.threadID, event.messageID)
  }
  if (haha.includes("bot ummah") || haha.includes("bot kiss me ")){
    api.sendMessage("👉🤖👈\n\n ummmmah 💋💋🥰365 Day", event.threadID, event.messageID)
  }
  if (haha.includes("bot love me") || haha.includes("Bot love me")){
    api.sendMessage("ok Baby love too❤️💋", event.threadID, event.messageID)
  }
if (haha.includes("bot biye korbe") || haha.includes("❤️‍🩹")){
    api.sendMessage("🥀😐", event.threadID, event.messageID)
}
  if (haha.includes("bot miss you") || haha.includes("bot i miss you")){
    api.sendMessage("miss you to 😌🥹", event.threadID, event.messageID)
      }
}
        module.exports.run = function({ api, event, client, __GLOBAL }) {
      }