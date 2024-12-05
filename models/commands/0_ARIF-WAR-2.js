module.exports.config = {
  name: "war2",
  version: "1.0.0",
  hasPermssion: 2, // Only admin can use
  credits: "ARIF-BABU",
  description: "Enables war mode where the bot replies only to messages from a specific user",
  commandCategory: "Admin",
  usages: "war on [UID] / war off",
  cooldowns: 5,
};

let warMode = false; // Tracks if war mode is active
let targetUID = null; // Stores the UID of the user to target in war mode
const botAdminUIDs = ["61553634015672", "61553634015672"]; // Replace with the actual bot admin UIDs

module.exports.handleEvent = async function({ api, event, Users }) {
  const { threadID, senderID, messageID, body } = event;

  // If war mode is active, reply only to messages from the targeted user
  if (warMode && senderID === targetUID) {
    const name = await Users.getNameUser(senderID);
    const replies = [
      "RANDIII KI OLADDD HAHAHHAHAHAH SALEEEEEEEEEEEEEE❌💊❌💊💊",
      "KUTTEEE SALEEEE GANDUUU TATATTATA HAHHHAHAHAHAHH💉😹😹😹😂",
      "TERI MA KI CHUT PR KALI MIDUGAAAAAAAA DUGAAAAAAA❌💊🚫💊🚫💊🚫", "TPKKKKKKKK SALEEEEEEEEEE FTTUUUU SALEEEEEEEEEEEE🚫💊🚫💊🚫💉🚫", "HAHAHAHHAH AJAJAJJA ABBBB MADACHODDDDDDDDDDDDDDD💊💉🔕🔕🔕😂", "TOHARIIII GANDIII KIII KHUZLIII MITAUGA SALEEEE💉😹💉😹😹😂", "KUTTEEE SALEEEE GANDUUU TATATTATA HAHHHAHAHAHAHH💉😹💉😹😂", "TATATATTTATATTA TPKKKKKKK SALEEEE DLLEEEEEEEEE💉😹😂😹😂😹", "KUTTEEE SALEEEE GANDUUU TATATTATA HAHHHAHAHAHAHH💉😹😹😹😂", "TATATATTTATATTA TPKKKKKKK SALEEEE DLLEEEEEEEEE💉😹😂😹😂😹", "KUTTEEE SALEEEE GANDUUU TATATTATA HAHHHAHAHAHAHH💉😹😹😹😂", "TATATATTTATATTA TPKKKKKKK SALEEEE DLLEEEEEEEEE💉😹😂😹😂😹", "KUTTEEE SALEEEE GANDUUU TATATTATA HAHHHAHAHAHAHH💉😹😹😹😂", "GGGAWARRRRRRRR SALLLLEEEEEEEEE HAHAHHAHAHAHHAHA💉😹😂😹😂", "TERIII BUAA KAAA BHOXDA CHODAAAA SALEEEE GANDU💉😹😂😹😂", "BHAGGGG MTTTTT MAUGAAA SALEEEEE LOLLLLLLL💉🤞😂🤞😂😹", "SALEEEEEEEEEEEEEE GANDUUUUU MASARCHODDD💉😹😹😂", "SALEEEEEEEEE OKADDDDDD BNAAA FIRRRR ANANANNANANN💉😹😂😹😹😂", "HAHAHAHHAHAHAHHAHAHHAHAHAHAHHAHHAHAHAHAHHAHAHAHH💉😹😂😹😹😂", "TTTOPPPPP RANDIIIIII KIIII OLADDD HAIIII TUUUUUU💉😹😂😹😹😂", "BETAAAAAAAA PAPAAAAA HUU TUMHARAA MA CHODEGE UKI💉😹😂😹😹😂", "GAWARRRRR TATATTATATA SALEEEE FTUUUUUUUUUUU💊😹💉😹😂😹😂", "TERIII NANIII KIII CHUTTT MARUUU SALEEEEEEEEEEEE💉😹😂😹😂🔕🔕💊😹👅🤞👅🤞👅➗🤞❌😹🔕❌❌🔕", "BHOXDIKEEEEEE GANDUUUUUUUUUU SALEEEEEEEEEEEEEEEE💉😹💉🔕🔕👅❌👅❌👅❌💊🚫🚫💊😹", "HHAHAHH❌💊🔕👅😹🔕💉HAHAHHA🚫💉🔕💉JAJAJJAJ🚫💊💊😹😂😹❌😹😹❌", "TERIII BAPPP KIII GANDDD MEEEE TEZABB DALUUUUUUU💉😹😂😹😹❌❌😹",
      // ... (same as before)
    ];

    // Generate a random reply
    const reply = replies[Math.floor(Math.random() * replies.length)];

    // Send the reply
    return api.sendMessage(reply.replace("{name}", name), threadID, messageID);
  }
};

module.exports.run = async function({ api, event, args }) {
  const { threadID, messageID, senderID } = event;
  const command = args[0];

  // Check if the sender is the bot admin
  if (!botAdminUIDs.includes(senderID)) {
    return api.sendMessage("Only the bot admin can use this command.", threadID, messageID);
  }

  // Command to turn war mode on
  if (command === "on") {
    const uid = args[1]; // Get the UID from the command

    // Ensure a UID was provided
    if (!uid) {
      return api.sendMessage("Please provide a UID to target.", threadID, messageID);
    }

    // Set war mode to active and save the target UID
    warMode = true;
    targetUID = uid;

    return api.sendMessage(`War mode activated! Now targeting UID: ${uid}`, threadID, messageID);
  }

  // Command to turn war mode off
  if (command === "off") {
    // Disable war mode
    warMode = false;
    targetUID = null;

    return api.sendMessage("War mode deactivated.", threadID, messageID);
  }

  return api.sendMessage("Invalid command. Use 'war on [UID]' or 'war off'.", threadID, messageID);
};