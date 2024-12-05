module.exports.config = {
        name: "joinNoti",
        eventType: ["log:subscribe"],
        version: "1.0.1",
        credits: "ARIF BABU",
        description: "MADE BY ARIF BABU",
        dependencies: {
            "fs-extra": ""
        }
};
module.exports.run = async function({ api, event }) {

        const request = require("request");
        const { threadID } = event;
        if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
                api.changeNickname(`【 ${global.config.PREFIX} 】 ${global.config.BOTNAME}`, threadID, api.getCurrentUserID());
                return api.sendMessage(`‎‎❁ ━━[  𝗪𝗘𝗟𝗖𝗢𝗠𝗘  ]━━ ❁\n\nजल्दी से स्वागत करो हमारा 😃\n\n━━━━━━━━━━━━━━━━━━\n╰┈➤ OWNER 𒁍  ARIF BABU\n╰┈➤ BOT PREFIX 𒁍 【 ${global.config.PREFIX} 】\n. ╰┈➤ FACEBOOK LINK 𒁍 https://www.facebook.com/profile.php?id=61553634015672&mibextid=kFxxJD\n━━━━━━━━━━━━━━━━━━\nलो मैं आ गया आपका प्यारा आरिफ बाबू स्वागत करो हमारा 🙈`, threadID);
        }
        else {
                try {
    const request = require("request");
                        const fs = global.nodemodule["fs-extra"];
                        let { threadName, participantIDs } = await api.getThreadInfo(threadID);

                        const threadData = global.data.threadData.get(parseInt(threadID)) || {};

                        var mentions = [], nameArray = [], memLength = [], i = 0;

    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var userName = data[obj].name.replace("@", "");             if (userID !== api.getCurrentUserID()) {  

                                nameArray.push(userName);
                                mentions.push({ tag: userName, id: userID, fromIndex: 0 });

                                memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);

                        (typeof threadData.customJoin == "undefined") ? msg = "❁ ━━[  𝗪𝗘𝗟𝗖𝗢𝗠𝗘  ]━━ ❁\n\nजल्दी से स्वागत करो हमारा 😃\n╰┈➤ NAME 𒁍  {uName}\n╰┈➤ MEMBER TO 𒁍 {soThanhVien}th\n╰┈➤ GROUP NAME 𒁍 {threadName}\n━━━━━━━━━━━━━━━━━━\n╰┈➤ MR BOSS 𒁍 ARIF BABU 😃\n━━━━━━━━━━━━━━━━━━\nआप इस ग्रुप के {soThanhVien}th मेंबर हो.......🤠\n━━━━━━━━━━━━━━━━━━\nलो मैं आ गया आपका प्यारा आरिफ बाबू स्वागत करो हमारा 🙈" : msg = threadData.customJoin;
                        msg = msg
                        .replace(/\{uName}/g, nameArray.join(', '))
                        .replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
                        .replace(/\{soThanhVien}/g, memLength.join(', '))
                        .replace(/\{threadName}/g, threadName);                        

      var link = [
"https://i.imgur.com/Rl6Py22.gif",
"https://i.imgur.com/WpOudX3.gif",
"https://i.imgur.com/DuoVYZi.gif",
"https://i.imgur.com/3M3lYay.gif",
      ];
                                var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashJ.jpg"), mentions }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashJ.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashJ.jpg")).on("close", () => callback());       
                  }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
        }
                                                  } 
