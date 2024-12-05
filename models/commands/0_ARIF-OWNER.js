const fs = require("fs");
module.exports.config = {
  name: "OWNER",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "ARIF BABU", 
  description: "MADE BY ARIF BABU",
  commandCategory: "No command marks needed",
  usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("owner") ||
     react.includes("Owner") || 
react.includes("OWNER")) {
    var msg = {
  body: "❁ ━━━[  𝗢𝗪𝗡𝗘𝗥  ]━━━ ❁\n\n━━━━━━━━━━━━━━━━━━\n╰┈➤ OWNER 𒁍  ARIF BABU\n╰┈➤ FACEBOOK LINK 𒁍 https://www.facebook.com/profile.php?id=61553634015672&mibextid=kFxxJD\n━━━━━━━━━━━━━━━━━━\nजल्दी से स्वागत करो हमारा 😃",
        attachment: fs.createReadStream(__dirname + `/noprefix/OWNER.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
