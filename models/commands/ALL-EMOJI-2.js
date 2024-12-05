const fs = require("fs");
module.exports.config = {
          name: "AUTO-EMOJI-2",
        version: "1.0.1",
          hasPermssion: 0,
          credits: "John Lester", 
          description: "No Prefix",
          commandCategory: "no prefix",
        cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
 let haha = event.body.toLowerCase();
  if (haha.includes("#pair") || haha.includes("#pairv") || haha.includes("#girldp") || haha.includes("#boydp") || haha.includes("#help") || haha.includes("#help2") || haha.includes("hello") || haha.includes("bot") || haha.includes("hyy") || haha.includes("babu") || 
haha.includes("Bot") || haha.includes("Babu") || haha.includes("#annu") || haha.includes("#annu2") || haha.includes("#pair2")){                 
    return api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
    api.markAsSeen(1, (err) => {});
  }
    if (haha.includes("#girlvideo") || haha.includes("#sadvideo") || haha.includes("#meme") || haha.includes("#cpl") || haha.includes("#hijabdp") || haha.includes("#dog") || haha.includes("#dpname") || haha.includes("#mark") || haha.includes("#markv") || haha.includes("#frame") || haha.includes("#funny")){
      return  api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true);
}
  if (haha.includes("wow") || haha.includes("hack") || haha.includes("upt") || haha.includes("sed") || haha.includes("#war") || haha.includes("#war2") || haha.includes("#removebg") || haha.includes("#dp2") || haha.includes("#dp") || haha.includes("#dp3") || haha.includes("Prefix") || haha.includes("#inf")){
    return api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
      }
}
        module.exports.run = function({ api, event, client, __GLOBAL }) {
      }