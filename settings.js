//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//Instagram: lawliet.kfx
//Telegram: TOGE20
//GitHub: @toge012345
//WhatsApp: +13038480418
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//   * Created By Github: DGXeon.
//   * Credit To Xeon
//   * © 2024 TOGE-MD.
// ⛥┌┤
// */

const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//owmner v card
//________________________________________________________________________________________________________
global.ytname = process.env.YT_NAME || "YT: kenzo3146" //ur yt chanel name
//________________________________________________________________________________________________________
global.socialm = process.env.MEDIA || "GitHub: lioneloff" //ur github or insta name
//________________________________________________________________________________________________________
global.location = process.env.GL_INFO || "United states, New York, Manhattan" //ur location
//________________________________________________________________________________________________________

//new
//________________________________________________________________________________________________________
global.botname = process.env.BOT_NAME || 'B҉M҉F҉ ҉G҉A҉N҉G҉S҉' //ur bot name
//________________________________________________________________________________________________________
global.ownernumber = process.env.SUDO || '13038480418' //ur owner number
//________________________________________________________________________________________________________
global.ownername = process.env.SUDO_NAME || '•.¸♡ 𝐓𝐎𝐆𝐄 𝐈𝐍𝐔𝐌𝐀𝐊𝐈 ♡¸.•' //ur owner name
//________________________________________________________________________________________________________
global.websitex = process.env.YT_LINK || "https://chat.whatsapp.com/JQ4s2pJuBReE7YL9wKJPHo"
//________________________________________________________________________________________________________
global.wagc = process.env.GL_PUSH || "https://chat.whatsapp.com/JQ4s2pJuBReE7YL9wKJPHo"
//________________________________________________________________________________________________________
global.themeemoji = process.env.GL_EMOJI || '🏮'
//________________________________________________________________________________________________________
global.wm = process.env.GL_WM || "•.¸♡ 𝐓𝐎𝐆𝐄 𝐈𝐍𝐔𝐌𝐀𝐊𝐈 ♡¸.•"
//________________________________________________________________________________________________________
global.botscript = process.env.GL_SC || 'https://github.com/toge012345/TOGE-MD' //script link
//________________________________________________________________________________________________________
global.packname = process.env.PACK_NAME || "B҉M҉F҉ ҉G҉A҉N҉G҉S҉"
//________________________________________________________________________________________________________
global.author = process.env.AUTHER_NAME || "•.¸♡ 𝐓𝐎𝐆𝐄 𝐈𝐍𝐔𝐌𝐀𝐊𝐈 ♡¸.•"
//________________________________________________________________________________________________________
global.creator = process.env.GL_DEVS || "13038480418@s.whatsapp.net"
//________________________________________________________________________________________________________
global.xprefix = process.env.PREFIX || '.'
//________________________________________________________________________________________________________
global.premium = process.env.GL_VIP || ["13038480418"] // Premium User
//________________________________________________________________________________________________________
global.hituet = 0
//________________________________________________________________________________________________________

//bot sett
//________________________________________________________________________________________________________
global.typemenu = process.env.MENU_DESIGN || 'v8' // menu type 'v1' => 'v8'
//________________________________________________________________________________________________________
global.typereply = process.env.REPLY_TYPE || 'v3' // reply type 'v1' => 'v3'
//________________________________________________________________________________________________________
global.autoblocknumber = process.env.AUTO_BAN || '212' //set autoblock country code
//________________________________________________________________________________________________________
global.antiforeignnumber = process.env.AUTO_BLOCK || '212' //set anti foreign number country code
//________________________________________________________________________________________________________
global.welcome = process.env.WELCOME_MSG || true //welcome/left in groups
//________________________________________________________________________________________________________
global.anticall = process.env.GL_NOCALL || false //bot blocks user when called
//________________________________________________________________________________________________________
global.autoswview = process.env.AUTO_STATUS_SEEN || true //auto status/story view
//________________________________________________________________________________________________________
global.adminevent = process.env.ANNOUNCE_MSG  || true //show promote/demote message
//________________________________________________________________________________________________________
global.groupevent = process.env.GROUP_ANNOUNCE_MSG || true //show update messages in group chat
//________________________________________________________________________________________________________


//msg
global.mess = {
	limit: '_*Your limit is up!*_',
	nsfw: '_*Nsfw is disabled in this group, Please tell the admin to enable*_',
    done: '_*Done ✓*_',
    error: '_*I am having error to execute this*_',
    success: '_*Here you go!*_'
}
//thumbnail
global.thumb = fs.readFileSync('./TogeMedia/theme/togepic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
