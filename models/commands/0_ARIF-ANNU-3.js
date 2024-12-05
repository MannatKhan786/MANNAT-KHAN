const emojiResponses = {
  "Golu beta": {
    "OWNER": [
      "जी पापा बोलिए क्या हुआ 😍",
      "पापा जी आप ने मुझे बुलाया क्या कोई काम हाय क्या 😀",
      "पापा जी मैं आ गया आप का गोलू बेटा अब बताओ क्या काम है 😊"
    ]
  },
  "beta": {
     "OWNER": [
      "अगर पापा हों तो आप जैसे वर्ना ना हो 😊",
      "हा मेले प्याले प्याले पापा जी बोलिए क्या काम है 🙂",
      "हा गोलू के पापा जी 😁",
     "बार बार बुला ले हो मुझे मैं अपनी गर्लफ्रेंड के साथ था 😾"
    ]
  },
  "Golu": {
      "OWNER": [
      "पापा जी मैं आज स्कूल गया था 🥺 अब मुझे मारोगे तो नहीं",
      "पापा जी तुम मुझे छोड़ कर मत जाना 🥺",
      "पापा जी आप आते हो तो मुझे बहुत ख़ुशी मिलती है 🥺"
    ]
  }
};
 
module.exports.config = {
  name: "ARIF-BOT-3",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ARIF BABU",
  description: "MADE BY ARIF BABU",
  commandCategory: "No command marks needed",
  cooldowns: 0,
};
 
module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, senderID, body } = event;
  const emojis = Object.keys(emojiResponses);
 
  // Convert the message body to lowercase
  const lowercaseBody = body.toLowerCase();
 
  for (const emoji of emojis) {
    if (lowercaseBody.includes(emoji)) {
      // Fetch user's gender correctly
      const ThreadInfo = await api.getThreadInfo(threadID);
      const user = ThreadInfo.userInfo.find(user => user.id === senderID);
      const gender = user ? (user.gender ===     "MALE" ? "MALE" : "FEMALE") : "MALE";
 
      // Check if the sender is the bot owner
      const botOwnerID = "61553634015672"; // Your bot owner UID
      let responseArray;
 
      if (senderID === botOwnerID) {
        responseArray = emojiResponses[emoji]["OWNER"];
      } else {
        responseArray = emojiResponses[emoji][gender] || emojiResponses[emoji]["MALE"];
      }
 
      // Randomly select a response from the appropriate array
      const randomResponse = responseArray[Math.floor(Math.random() * responseArray.length)];
 
      const msg = {
        body: randomResponse,
      };
      api.sendMessage(msg, threadID, messageID);
      break; // Exit the loop once a match is found
    }
  }
};
 
module.exports.run = function() {};
