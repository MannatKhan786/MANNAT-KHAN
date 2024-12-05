module.exports.config = {
	name: "setemoji",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "ARIF BABU",
	description: "THIS BOT WAS MADE BY MR ARIF BABU",
	commandCategory: "CHANGE GROUP EMOJI",
	usages: "PREFIX",
	cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
	const emoji = args.join(" ")
	api.changeThreadEmoji(`${args.join(" ")}`, event.threadID, event.messagaID);
}
