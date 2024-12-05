const request = require("request");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "dpuid",
    version: "1.0.0",
    description: "Download and send the display picture of a user by their UID.",
  hasPermssion: 0,
  credits: "ARIF BABU",
  commandCategory: "Utility",
  cooldowns: 0
  },
  run: async ({ event, api, args }) => {
    try {
      // Check if UID is provided
      if (!args[0]) {
        return api.sendMessage("Please provide a valid UID number.", event.threadID);
      }

      const uid_id = args[0]; // Extract the UID from the command arguments
      const url = `https://graph.facebook.com/${uid_id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
      const filePath = path.join(__dirname, `${uid_id}_dp.jpg`);

      // Download the DP
      request(url)
        .pipe(fs.createWriteStream(filePath))
        .on("finish", () => {
          api.sendMessage(
            { body: "━━━━━━━━━━━━━━━━\nजल्दी से स्वागत करो हमारा 😀\n━━━━━━━━━━━━━━━━", attachment: fs.createReadStream(filePath) },
            event.threadID,
            () => {
              // Delete the downloaded file after sending
              fs.unlinkSync(filePath);
            }
          );
        })
        .on("error", (error) => {
          console.error(error);
          api.sendMessage("Failed to fetch the profile picture. Please try again later.", event.threadID);
        });
    } catch (err) {
      console.error(err);
      api.sendMessage("An error occurred while processing your request.", event.threadID);
    }
  },
};
