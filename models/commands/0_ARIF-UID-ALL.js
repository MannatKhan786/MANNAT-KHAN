module.exports.config = {
  name: "uidall",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "Deku",
  description: "Get all uid and names in Group.",
  commandCategory: "...",
  cooldowns: 2,
};
module.exports.run = async function ({ api, event, args, Users }) {

function reply(d) {
  api.sendMessage(d, event.threadID, event.messageID)
}
var ep = event.participantIDs;
msg = ""
msgs = ""
m = 0;
for (let i of ep) {
  m += 1;
  const name = await Users.getNameUser(i);
  msg += m+". "+name+"\n╰┈➤UID:𒁍 "+i+"\n╰┈➤Facebook link:𒁍 https://facebook.com/"+i+"\n\n━━━━━━━━━━━━━━━━\n";
}
msgs += "❁ ━━━[ 𝗨𝗜𝗗 𝗔𝗟𝗟 ]━━━ ❁\n\n"+msg;
reply(msgs)
}