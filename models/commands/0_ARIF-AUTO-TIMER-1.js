const schedule = require('node-schedule');
const moment = require('moment-timezone');
const chalk = require('chalk');

module.exports.config = {
    name: 'autosent',
    version: '10.0.0',
    hasPermssion: 0,
    credits: 'ARIF BABU',
    description: 'MADE BY ARIF BABU',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};

const messages = [
    { time: '12:30 AM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 12:30 𝗔𝐌 😃\n\n ⏳ 𝐒𝐨 𝐉𝐚𝐨 𝐁𝐚𝐛𝐲 𝐆𝐨𝐨𝐝 𝐍𝐢𝐠𝐡𝐭 🥀\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁ ' },
    { time: '1:30 AM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 1:30 A𝐌 😃\n\n⏳ 𝗧𝘂𝗺𝗵𝗮𝗿𝗮 𝐌𝗲𝗿𝗲 𝐒𝗶𝘃𝗮 😘\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '2:30 AM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 2:30 A𝐌 😃\n\n⏳ 𝗧𝘂𝗺 𝗔𝗯𝗵𝗶 𝗧𝗮𝗸 𝗦𝗼𝘆𝗲 𝗡𝗵𝗶 😐\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '3:30 AM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 3:30 A𝐌 😃\n\n⏳ 𝐀𝐜𝐜𝐡𝐚 𝐡𝐨𝐠𝐚 𝐍𝐞𝐞𝐧𝐝 𝐀𝐚𝐣𝐚𝐲𝐞 🌃 \n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '4:30 AM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 4:30 A𝐌 😃\n\n⏳ 𝐍𝐞𝐞𝐧𝐝 𝐀𝐚𝐣𝐚𝐲𝐞 🌃\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '5:30 AM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 5:30 𝗔𝐌 😃\n\n⏳ 𝐀𝐚𝐥𝐬𝐢 😹\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '6:30 AM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 6:30 A𝐌 😃\n\n⏳ 𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮 𝐀𝐥𝐚𝐢𝐤𝐮𝐦 ❤️🥀 💖 \n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '7:30 AM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 7:30 A𝐌 😃\n\n⏳ 𝐔𝐭𝐡 𝐉𝐚𝐨 𝐀𝐛𝐡𝐢 🥰\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '8:30 AM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 8:30 A𝐌 😃\n\n⏳ 𝐔𝐭𝐡 𝐆𝐲𝐞 𝐏𝐫𝐞𝐬𝐢𝐝𝐞𝐧𝐭 𝐣𝐈 𝐀𝐚𝐩? 😵\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '9:30 AM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 9:30 A𝐌 😃\n\n⏳ 𝐁𝐫𝐞𝐚𝐤𝐟𝐚𝐬𝐭 𝐊𝐚𝐫𝐥𝐨 𝐀𝐛𝐡𝐢 𝐁𝐚𝐛𝐲 🙈\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '10:30 AM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 10:30 A𝐌 😃\n\n⏳ 𝐀𝐚𝐥𝐬𝐢 𝐀𝐚𝐣 𝐂𝐨𝐥𝐥𝐞𝐠𝐞 𝐍𝐚𝐡𝐢 𝐆𝐚𝐲𝐞?🙀\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '11:30 AM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 11:30 A𝐌 😃\n\n⏳ 𝐌𝐮𝐣𝐡𝐞 𝐁𝐡𝐢 𝐘𝐚𝐚𝐝 𝐊𝐚𝐫 𝐋𝐢𝐲𝐚 𝐊𝐚𝐫𝐨 😻\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '12:30 PM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 12:30 𝐏𝐌 😃\n\n⏳ 𝐆𝐨𝐨𝐝 𝐀𝐟𝐭𝐞𝐫𝐍𝐨𝐨𝐧 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞🌞 𝐊𝐢𝐭𝐧𝐢 𝐆𝐚𝐫𝐦𝐢 𝐇 𝐁𝐚𝐡𝐚𝐫 🥵\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '1:30 PM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 1:30 𝐏𝐌 😃\n\n⏳ 𝐋𝐮𝐧𝐜𝐡 𝐊𝐚𝐫𝐥𝐨 𝐀𝐛𝐡𝐢 😇\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '2:30 PM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 2:30 𝐏𝐌 😃\n\n⏳ 𝐁𝐨𝐥𝐨 𝐉𝐚𝐢 𝐒𝐡𝐫𝐞𝐞 𝐑𝐚𝐦 💖😇\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '3:30 PM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 3:30 𝐏𝐌 😃\n\n⏳ 𝐓𝐡𝐨𝐝𝐚 𝐀𝐚𝐫𝐚𝐦 𝐊𝐚𝐫𝐥𝐨 𝐀𝐛𝐡𝐢 🥀\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '4:30 PM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 4:30 𝐏𝐌 😃\n\n⏳ 𝐁𝐚𝐡𝐮𝐭 𝐆𝐚𝐫𝐦𝐢 𝐇 𝐀𝐚𝐣 🥵\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '5:30 PM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 5:30 𝐏𝐌 😃\n\n⏳ 𝐇𝐚𝐫 𝐇𝐚𝐥 𝐌𝐞 𝐇𝐚𝐦𝐞𝐬𝐡𝐚 𝐊𝐡𝐮𝐬𝐡 𝐑𝐚𝐡𝐨 😇\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '6:30 PM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 6:30 𝐏𝐌 😃\n\n⏳ 𝐁𝐨𝐥𝐨 𝐒𝐚𝐭𝐲 𝐌𝐞 𝐉𝐚𝐢𝐭𝐞 𝐇 𝐒𝐚𝐧𝐚𝐭𝐚𝐧 𝐃𝐡𝐚𝐫𝐦 💖\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '7:30 PM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 7:30 𝐏𝐌 😃\n\n⏳ 𝐊𝐡𝐮𝐬𝐡 𝐑𝐚𝐡𝐧𝐚 𝐌𝐞𝐫𝐚 𝐏𝐫𝐨𝐦𝐢𝐬𝐞 💞\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '8:30 PM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 8:30 𝐏𝐌 😃\n\n⏳ 𝐃𝐢𝐧𝐧𝐞𝐫 𝐊𝐚𝐫𝐥𝐨 𝐒𝐚𝐫𝐞 😋\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '9:30 PM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 9:30 𝐏𝐌 😃\n\n⏳ 𝐌𝐞𝐫𝐞 𝐂𝐮𝐭𝐞 𝐁𝐚𝐛𝐲 💞\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '10:30 PM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 10:30 𝐏𝐌 😃\n\n⏳ 𝐓𝐮𝐦 𝐌𝐮𝐬𝐤𝐮𝐫𝐚𝐨 𝐇𝐚𝐬𝐨 𝐇𝐚𝐦𝐞𝐬𝐡𝐚 ☺️\n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' },
    { time: '11:30 PM', message: '❁ ━━━❃[ 𝐓𝐈𝐌𝐄 ]❃━━━ ❁\n\n𝐓𝐈𝐌𝐄 11:30 😃\n\n𝐏𝐌 ⏳ 𝐁𝐛𝐲 𝐊𝐡𝐚𝐧𝐚 𝐊𝐡𝐚𝐲𝐚 𝐀𝐚𝐩𝐍𝐞? \n\n❁━━❃𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔❃━━❁' }
];

module.exports.onLoad = ({ api }) => {
    console.log(chalk.bold.hex("#00c300")("============ SUCCESFULLY LOADED THE AUTOSENT COMMAND ============"));

    messages.forEach(({ time, message }) => {
        const [hour, minute, period] = time.split(/[: ]/);
        let hour24 = parseInt(hour, 10);
        if (period === 'PM' && hour !== '12') {
            hour24 += 12;
        } else if (period === 'AM' && hour === '12') {
            hour24 = 0;
        }

        const scheduledTime = moment.tz({ hour: hour24, minute: parseInt(minute, 10) }, 'Asia/Kolkata').toDate();

        schedule.scheduleJob(scheduledTime, () => {
            global.data.allThreadID.forEach(threadID => {
                api.sendMessage(message, threadID, (error) => {
                    if (error) {
                        console.error(`Failed to send message to ${threadID}:`, error);
                    }
                });
            });
        });
    });
};

module.exports.run = () => {
    // This function can be left empty as the main logic is handled in onLoad
};