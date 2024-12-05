module.exports.config = {
  name: "leave",
  eventType: ["log:unsubscribe"],
  version: "1.1.0",
  credits: "ARIF BABU",
  description: "MADE BY ARIF BABU GIF",
  dependencies: {
    "fs-extra": "",
    "axios": "",
    "path": "",
    "moment-timezone": ""
  }
};

module.exports.run = async function({ api, event, Users }) {
  const axios = require('axios');
  const moment = require("moment-timezone");
  const { createWriteStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { join } = global.nodemodule["path"];
  const { threadID } = event;

  if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;

  const name = await Users.getNameUser(event.logMessageData.leftParticipantFbId) || "उपयोगकर्ता";
  const type = (event.author == event.logMessageData.leftParticipantFbId) ? "खुद ही भाग गया 😐👈" : "एडमिन ने गुस्से में निकाल दिया। 😑👈";

  // Time-Based Session
  const hours = moment.tz("Asia/Kolkata").format("HH");
  const date = moment.tz("Asia/Kolkata").format("DD/MM/YYYY");
  const time = moment.tz("Asia/Kolkata").format("HH:mm:ss");
  let session;

  if (hours >= 5 && hours < 12) {
    session = "सुबह";
  } else if (hours >= 12 && hours < 17) {
    session = "दोपहर";
  } else if (hours >= 17 && hours < 21) {
    session = "शाम";
  } else {
    session = "रात";
  }

  const path = join(__dirname, "cache", "leaveGif");
  if (!existsSync(path)) mkdirSync(path, { recursive: true });

  // Imgur GIF Links
  const gifLinks = [
    "https://i.imgur.com/aESbSZy.gif",
    "https://i.imgur.com/Yr0K0q0.gif",
    "https://i.imgur.com/MpBXhBb.gif",
    "https://i.imgur.com/lvzGoe5.gif"
  ];

  const randomGif = gifLinks[Math.floor(Math.random() * gifLinks.length)];
  const gifPath = join(__dirname, "cache", "leaveGif", `${threadID}.gif`);

  // Message format with time-based session
  let msg = `❁ ━━[ 𝗚𝗢𝗢𝗗 𝗕𝗬𝗘 ]━━ ❁\n\n सुकर है एक ठरकी इस ग्रुप में कम हो गया 😃✌️\n\n━━━━━━━━━━━━━━━━━━\n╰┈➤ उसका नाम है 𒁍 ${name} \n╰┈➤ रीजन 𒁍 ${type}\n━━━━━━━━━━━━━━━━━━\n𝗠𝗔𝗗𝗘 𝗕𝗬 𝗔𝗥𝗜𝗙 𝗕𝗔𝗕𝗨 🍒`;

  try {
    // Download the GIF from Imgur
    const response = await axios({
      url: randomGif,
      method: 'GET',
      responseType: 'stream'
    });

    // Save the GIF to the file system
    const writer = createWriteStream(gifPath);
    response.data.pipe(writer);

    // Wait for the GIF to finish downloading
    writer.on('finish', () => {
      // Send the GIF with the message
      api.sendMessage({
        body: msg,
        attachment: require("fs").createReadStream(gifPath)
      }, threadID);
    });

    writer.on('error', () => {
      api.sendMessage("GIF भेजने में समस्या आई।", threadID);
    });

  } catch (error) {
    api.sendMessage("कुछ गड़बड़ हो गई। GIF भेजने में असमर्थ।", threadID);
  }
};