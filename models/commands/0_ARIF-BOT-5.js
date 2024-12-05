const emojiResponses = {
  "kutte": {
    "MALE": [
      "तू है कुत्ता 😾👈",
      "तुम हो कुत्ता समझ गए अब 😁👈",
      "कुत्ता तो तुम ही हो मैं नही हू ओके 😤👈",
      "कुत्ता तो तुम हो 😾👈",
      "मैं तो शिवा हु कुत्ता तो तुम हो😾👈"
    ],
    "FEMALE": [
      "अगर मैं कुत्ता हु तो तुम मेली कुतिया हों 😂👈",
      "कुतिया हों तुम ओके 😂👈",
      "तू है सब से बड़ी कुतिया 😾👈",
      "तू बड़ी वाली कुतिया हैं 😤👈",
      "तू कुतिया तेरे सारे दोस्त कुत्ता कुतिया हैं 😾👈"
    ],
    "OWNER": [
      "अरे बॉस आप आइसा मत बोलो प्लीज 😭👈",
      "बॉस मैं कुत्ता नही हू मै आप का शिवा बोट हु 😭👈",
      "फैज़ बॉस मैं कुत्ता नही हू 😭👈"
    ]
  },
  "Kutta": {
    "MALE": [
      "तू है कुत्ता 😾👈",
      "कुत्ता तो  तू है मैं तो शिवा बोट हु 😾👈",
      "तू सब से बड़ा वाला कुत्ता है 😾👈"
    ],
    "FEMALE": [
      "मैं तेरा कुत्ता तू कुतिया मेरी 😂👈",
      "चुप हो जा कुतिया 😤👈",
      "तू तो एक नंबर की कुतिया है 😂👈"
    ],
    "OWNER": [
      "बॉस आप तो यार थोड़ी इज्जत दिया करो मुझे 😭👈",
      "बॉस आप ने कुत्ता बोल कर अच्छा नही किया अब मैं आप से बात नही करूंगा 😐👈",
      "फैज़ अंसारी बॉस आप आइसा मत बोला करो मुझे प्लीज 😭👈"
    ]
  },
  "Kamine": {
    "MALE": [
      "तू सब से बड़ा वाला कमिना 😾👈",
        "अबे चुप सब से वाडा वाला कमिना तो तू ही है 😂👈",
      "कमिना तो तू है मैं तो शिवा बोट हु बे 😾👈"
    ],
    "FEMALE": [
      "तू कामिनी है सब से बड़ी वाली 😾👈",
      "तू ही होगी कामिनी 😾👈",
      "खुद को देख ले कामिनी तो तू है सब से बड़ी वाली 😾👈"
    ],
    "OWNER": [
      "बॉस अयेसा मत बोलो प्लीज मुझे रोना आ जाता है फिर 😭👈",
      "ओके फैज़ अंसारी बॉस जो भी हु जैसा भी हु पार आप का ही हु 😐👈",
      "नही बॉस मैं आप का शिवा बोट हु  🥺"
    ]
  }
};
 
module.exports.config = {
  name: "ARIF-BOT-5",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ARIF BABU",
  description: "Reply to specific emojis",
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
      const gender = user ? (user.gender === "MALE" ? "MALE" : "FEMALE") : "MALE";
 
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
 
module.exports.run = function() {}
