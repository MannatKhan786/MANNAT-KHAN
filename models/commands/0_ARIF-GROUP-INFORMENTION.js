const fs = require("fs");
const request = require("request");
module.exports.config = {
	name: "groupinf",
	version: "1.0.0", 
	hasPermssion: 1,
	credits: "ARIF BABU",
	description: "THIS BOT WAS MADE BY MR ARIF BABU",
	commandCategory: "GROUP INFORMETION", 
	usages: "PREFIX", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	let threadInfo = await api.getThreadInfo(event.threadID);
	var memLength = threadInfo.participantIDs.length;
	let threadMem = threadInfo.participantIDs.length;
	var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
     for (let z in threadInfo.userInfo) {
     	var gioitinhone = threadInfo.userInfo[z].gender;
     	var nName = threadInfo.userInfo[z].name;
        if(gioitinhone == "MALE"){gendernam.push(z+gioitinhone)}
        else if(gioitinhone == "FEMALE"){gendernu.push(gioitinhone)}
            else{nope.push(nName)}
    };
	var nam = gendernam.length;
    var nu = gendernu.length;
	let qtv = threadInfo.adminIDs.length;
	let sl = threadInfo.messageCount;
	let u = threadInfo.nicknames;
	let icon = threadInfo.emoji;
	let threadName = threadInfo.threadName;
	let id = threadInfo.threadID;
	let sex = threadInfo.approvalMode;
			var pd = sex == false ? 'TURNED OFF' : sex == true ? 'TURNED ON' : 'NOTHING';
			var callback = () =>
				api.sendMessage(
					{
						body: `❁ ━━[ 𝗚𝗥𝗢𝗨𝗣 𝗜𝗡𝗙 ]━━ ❁\n\n╰┈➤ 𝗚𝗥𝗢𝗨𝗣 𝗡𝗔𝗠𝗘 𒁍 [ ${threadName} ]\n╰┈➤ 𝗚𝗥𝗢𝗨𝗣 𝗨𝗜𝗗  𒁍 [ ${id} ]\n╰┈➤ 𝗚𝗥𝗢𝗨𝗣 𝗔𝗣𝗣𝗥𝗢𝗩𝗔𝗟  𒁍 [ ${pd} ]\n╰┈➤ 𝗚𝗥𝗢𝗨𝗣 𝗘𝗠𝗢𝗝𝗜 𒁍 [ ${icon} ]\n╰┈➤ 𝗧𝗢𝗧𝗔𝗟 𝗠𝗘𝗠𝗕𝗘𝗥 𒁍 [ ${threadMem} ]\n╰┈➤ 𝗧𝗢𝗧𝗔𝗟 𝗠𝗔𝗟𝗘  𒁍 [ ${nam} ]\n╰┈➤ 𝗧𝗢𝗧𝗔𝗟 𝗙𝗘𝗠𝗔𝗟𝗘 𒁍 [ ${nu} ]\n╰┈➤ 𝗧𝗢𝗧𝗔𝗟 𝗚𝗥𝗢𝗨𝗣 𝗔𝗗𝗠𝗜𝗡 𒁍 [ ${qtv} ]\n╰┈➤ 𝗧𝗢𝗧𝗔𝗟 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗦𝗦𝗔𝗚𝗘𝗦 𒁍 [ ${sl} ]\n\n━━━━━━━━━━━━━━━━\n𝗠𝗔𝗗𝗘 𝗕𝗬 😈 𝗔𝗥𝗜𝗙 𝗕𝗔𝗕𝗨`,
						attachment: fs.createReadStream(__dirname + '/cache/1.png')
					},
					event.threadID,
					() => fs.unlinkSync(__dirname + '/cache/1.png'),
					event.messageID
				);
			return request(encodeURI(`${threadInfo.imageSrc}`))
				.pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
				.on('close', () => callback());
	    }
