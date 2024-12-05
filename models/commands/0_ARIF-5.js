const fs = require("fs");
module.exports.config = {
        name: "Ram",
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
        if(react.includes("jay shree ram") ||
     react.includes("Jay shree ram") || react.includes("JAY SHREE RAM") || react.includes("jai shree ram") ||
react.includes("Jai shree ram") ||
react.includes("JAI SHREE RAM")) {
                var msg = {
                                body: `💙 ─── जय श्री राम  ─── 💙
 💙  ─── जय श्री राम  ─── 💙`,
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }