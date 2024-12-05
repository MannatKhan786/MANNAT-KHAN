module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ARIF BABU",
  description: "THIS BOT IS MADE BY ARIF BABU",
  commandCategory: "BOT-PREFIX",
  usages: "PREFIX",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  //if (senderID == global.data.botID) return;
  if ((this.config.credits) != "ARIF BABU") { return api.sendMessage(`ARIF-BOT-CREATER 🙂`, threadID, messageID)}
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  var arr = ["mpre","mprefix","prefix", "dấu lệnh", "prefix của bot là gì","daulenh", "duong", "what prefix", "freefix", "what is the prefix", "bot dead", "bots dead", "where prefix", "what is bot", "what prefix bot", "how to use bot" ,"how use bot", "where are the bots","bot not working","bot is offline","where prefix","prefx","prfix","prifx","perfix","bot not talking","where is bot"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
const prefix = threadSetting.PREFIX || global.config.PREFIX;
      if (data.PREFIX == null) {
        return out(`❁ ━━━[ 𝗣𝗥𝗘𝗙𝗜𝗫 ]━━━ ❁\n\n╰┈➤ 𝗢𝗪𝗡𝗘𝗥 𒁍 ARIF BABU\n╰┈➤ 𝗣𝗥𝗘𝗙𝗜𝗫 𒁍[ ${prefix} ]\n╰┈➤  𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗜𝗗 𒁍 https://www.facebook.com/profile.php?id=61553634015672&mibextid=kFxxJD\n\n𝗠𝗔𝗗𝗘 𝗕𝗬 🍒 𝗔𝗥𝗜𝗙 𝗕𝗔𝗕𝗨`)
      }
      else return out('️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️' + data.PREFIX)
    }

  });
};

module.exports.run = async({ event, api }) => {
    return api.sendMessage("मेरी जान ये कमांड नो प्री फिक्स है। सिर्फ प्री फिक्स लिखो 🙂✌️", event.threadID)
}