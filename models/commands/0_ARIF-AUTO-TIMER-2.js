module.exports.config = {
  name: "AUTO-TIME-2",
  version: "1.2.0",
  hasPermssion: 0,
  credits: "ARIF BABU",
  description: "MADE BY ARIF BABU",
  commandCategory: "Utilities",
  usages: "",
  cooldowns: 5,
};

module.exports.onLoad = async ({ api }) => {
  const timerData = {
    "09:00 AM": {
      message: "❁ ━━━━━━━[ 𝗔𝗥𝗜𝗙 𝗕𝗔𝗕𝗨 ]━━━━━━━ ❁\n\n✰ 𝗦𝗛𝗔𝗬𝗔𝗥𝗜 ➪ जो दिल के करीब थे ,वो जबसे दुश्मन हो गए जमाने में हुए चर्चे ,हम मशहूर हो गए 🙂\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁",
      url: "https://i.imgur.com/jrt0dJQ.jpeg"
    },
"11:00 AM": {
      message: "❁ ━━━━━━━[ 𝗔𝗥𝗜𝗙 𝗕𝗔𝗕𝗨 ]━━━━━━━ ❁\n\n✰ 𝗦𝗛𝗔𝗬𝗔𝗥𝗜 ➪ सुना है आज समंदर को बड़ा गुमान आया है, उधर ही ले चलो कश्ती जहां तूफान आया है। 🙂\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁",
      url: "https://i.imgur.com/jrt0dJQ.jpeg"
    },
    "01:00 AM": {
      message: "❁ ━━━━━━━[ 𝗔𝗥𝗜𝗙 𝗕𝗔𝗕𝗨 ]━━━━━━━ ❁\n\n✰ 𝗦𝗛𝗔𝗬𝗔𝗥𝗜 ➪  जो दिल के करीब थे ,वो जबसे दुश्मन हो गए जमाने में हुए चर्चे ,हम मशहूर हो गए 🙂\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁",
      url: "https://i.imgur.com/jrt0dJQ.jpeg"
    },
    "03:00 AM": {
      message: "❁ ━━━━━━━[ 𝗔𝗥𝗜𝗙 𝗕𝗔𝗕𝗨 ]━━━━━━━ ❁\n\n✰ 𝗦𝗛𝗔𝗬𝗔𝗥𝗜 ➪ सुना है आज समंदर को बड़ा गुमान आया है, उधर ही ले चलो कश्ती जहां तूफान आया है। 🙂\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁",
      url: "https://i.imgur.com/jrt0dJQ.jpeg"
    },
    "05:00 PM": {
      message: "❁ ━━━━━━━[ 𝗔𝗥𝗜𝗙 𝗕𝗔𝗕𝗨 ]━━━━━━━ ❁\n\n✰ 𝗦𝗛𝗔𝗬𝗔𝗥𝗜 ➪ जो दिल के करीब थे ,वो जबसे दुश्मन हो गए जमाने में हुए चर्चे ,हम मशहूर हो गए 🙂\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁",
      url: "https://i.imgur.com/jrt0dJQ.jpeg"
    }
  };

  const checkTimeAndSendMessage = async () => {
    const currentTime = new Date(Date.now() + 21600000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).split(',').pop().trim();

    if (timerData[currentTime]) {
      console.log(timerData[currentTime].message);
      console.log(timerData[currentTime].url);
      try {
       let messageData = { body: timerData[currentTime].message,attachment:(await require('axios').get(timerData[currentTime].url, { responseType: 'stream' })).data };

        global.data.allThreadID.forEach(i => api.sendMessage(messageData, i));
      } catch (error) {
        console.error(`Failed to send message for time ${currentTime}:`, error);
      }
    }
    setTimeout(checkTimeAndSendMessage, 45000);
  };

  checkTimeAndSendMessage();
};

module.exports.run= ({}) => {}
