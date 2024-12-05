const emojiResponses = {
  "🧐": {
    "MALE": [
      "भाई, इतनी गहराई से क्यों देख रहे हो? क्या खोज रहे हो? 🧐",
      "क्या मस्त ध्यान दे रहे हो, कोई खजाना मिला क्या? 🧐",
      "ये क्या मीनू की तरह घूर रहे हो? 🧐",
      "इतनी गंभीरता से देख रहे हो, कहीं प्रेम पत्र तो नहीं देख रहे? 🧐",
      "हिम्मत कर, पलकें झपकाओ, आँखें बर्न नहीं होंगी 🧐"
    ],
    "FEMALE": [
      "बेबी, इतनी देर से क्यों देख रही हो? कोई दिल की बात है? 🧐",
      "क्या देख रही हो, कुछ खास? 🧐",
      "बेबी, तुम्हारी निगाहों का जादू तो कमाल है 🧐",
      "इतना ध्यान से देखना, कहीं और नजर तो नहीं लग रही? 🧐",
      "क्या आँखों का टेस्ट ले रही हो? 🧐"
    ],
    "OWNER": [
      "Hey Boss, लग रहा है कोई बड़ा प्लान बना रहे हो 🧐",
      "Owner mode: 🧐 planning something epic?",
      "Owner नजरें इतनी गहरी क्यों हैं? बड़ा राज़ छुपा है क्या? 🧐"
    ]
  },
  "🤔": {
    "MALE": [
      "इतना क्यों सोच रहे हो 🤔",
      "इतना सोचो गे 🤨 तो ठंड लग जाएगी हिहिही 😁",
      "क्या सोच रहे हो इतना बताओ तो बबुआ हिहिह 😁"
    ],
    "FEMALE": [
      "क्या सोच रही हो देवी जी हिहिहिः 😁",
      "जादा ना सोचो डार्लिंग हिहिहिहि 😁",
      "क्या हुआ डार्लिंग इतना क्या सोच ली हो मेरे बारे में 🙈"
    ],
    "OWNER": [
      "क्या सोच रहे हो मेरे बॉस 😍👈",
      "बॉस टेंशन ना लो सादी तो हो ही जाएगी पक्का 😁👈",
      "बॉस जादा मत सोचो बास हुकम करो किसे ठोकना हैं 😁👈"
    ]
  },
  "🤨": {
    "MALE": [
      "जादा घमंड ना कर ओय लाले दी जान हिहिहि 😁",
        "ओय काके आंखे ठीक कर 😐",
      "किस बात का घमंड हैं आखिर मैं समझ नही पा रहा 😤"
    ],
    "FEMALE": [
      "अरे डार्लिंग किस बात घमंड हैं आप को जो मैं समझ नही पा ला 😾👈",
      "आप इतनी प्यारी हो यार फिर फेस ठिक करो डार्लिंग 🙈👈",
      "बाबू किसी ने कुछ बोला हाय क्या आप को जो आइसे आंखे चढ़ा ली हो मुझे बताओ 😾👈"
    ],
    "OWNER": [
      "अरे बॉस तुमको का हो गया अब आंखे ठीक करो 😐",
      "बॉस आप तो पहले से इस्मात तो आइसे क्यू देख रहे हो🤔",
      "बॉस कुछ हुआ हैं क्या आप को मुझे बताओ तो प्लीज 😐"
    ]
  }
};
 
module.exports.config = {
  name: "emojiReply",
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
 
module.exports.run = function() {};
