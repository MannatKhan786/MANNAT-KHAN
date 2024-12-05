const fs = require("fs");
module.exports.config = {
        name: "Radhe",
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
        if(react.includes("राधे श्याम") ||
     react.includes("राधे राधे") || react.includes("RADHE KRISHNA") || react.includes("RADHE SHYAM") ||
react.includes("radhe radhe") ||
react.includes("Radhe Radhe")) {
                var msg = {
                                body: `💙 ─── राधे राधे ─── 💙
 💙 ─── राधे कृष्ण  ─── 💙
💙───  राधे श्याम ─── 💙`,
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤩", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }