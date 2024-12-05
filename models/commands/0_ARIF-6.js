const fs = require("fs");
module.exports.config = {
        name: "Mahadev",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "ARIF BABU", 
        description: "THIS BOT IS ARIF BABU",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("MAHADEV") ||
     react.includes("mahadev") || react.includes("MAHAKAL") || react.includes("Mahakal") ||
react.includes("mahakal") ||
react.includes("Mahadev")) {
                var msg = {
                                body: `💙 ───— ह༢ ह༢ मह།देव ─── 💙
 💙 ─── 📿 ૐ નમ: શિવાય 📿 ─── 💙
🔱 𓆩 ᎷᎪᎻᎪᎠᎬᏙ 𓆪 🔱`,
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤩", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }