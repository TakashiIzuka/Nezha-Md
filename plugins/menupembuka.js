import moment from 'moment'
let handler  = async (m, { conn}) => {
let mundur = timeConvertA(1698253200000)
let waktu = ` ${mundur.day} Hᴀʀɪ ${mundur.hour} Jᴀᴍ ${mundur.minute} Mᴇɴɪᴛ`
let foto = 'https://telegra.ph/file/cb2828b7dd0a55906168b.jpg'
let text = `Hᴀʟᴏ Sᴀʏᴀ Nᴇᴢʜᴀ-Bᴏᴛ\nBᴀɢɪ Kᴀʟɪᴀɴ Yɢ Kᴇɴᴀʟ Nᴀᴍᴀ Nᴇᴢʜᴀ\nYᴀ Mᴇᴍᴀɴɢ Nᴀᴍᴀ Bᴏᴛ Iɴɪ Tᴇʀɪɴsᴘɪʀᴀsɪ Dᴀʀɪ Nᴀᴍᴀ Dɪᴀ\nOᴡɴᴇʀ Nʏᴀ Sᴜᴋᴀ Nᴏɴᴛᴏɴ Kᴀʀᴛᴜɴ Cɪɴᴀ💀 ᴀᴡᴏᴋᴀᴡᴏᴋᴀᴡᴏᴋ\n\nUʟᴛᴀʜ Oᴡɴᴇʀ:\n${waktu}\n\nNᴇᴢʜᴀ-Bᴏᴛ Aᴅᴀʟᴀʜ Bᴏᴛ Wʜᴀᴛsᴀᴘᴘ ʏɢ ʙᴇʀᴊᴀʟᴀɴ ᴅɪ ᴘʟᴀᴛғᴏʀᴍ ʟɪɴᴜx\nYɢ Dɪᴋᴇᴍʙᴀɴɢᴋᴀɴ Oʟᴇʜ TᴀᴋᴀsʜɪIᴢᴜᴋᴀシ Dᴇɴɢᴀɴ Sᴇʀᴠᴇʀ ʏɢ ᴋᴇɴᴄᴇɴɢ ᴛᴀᴘɪ ɢᴀᴋ ᴋᴇɴᴄᴇɴɢ² ᴀᴍᴀᴛ:ᴠ\nBᴀɢɪ ᴋᴀʟɪᴀɴ ʏɢ ɴᴀɴʏᴀ ɴɪ ʙᴏᴛ ʀᴜɴ ᴅɪ ᴍᴀɴᴀ?,Nɪ ʙᴏᴛ ʀᴜɴ ᴅɪ ᴘᴀɴᴇʟ\nKᴀʟᴏ sʟᴏᴡ ʀᴇsᴘᴏɴ ᴍᴀᴀᴘ ᴀᴊᴀ ᴋᴀʀɴᴀ ᴏᴡɴᴇʀ ɢᴀ ᴍᴀᴍᴘᴜ ʙᴇʟɪ sᴇʀᴠᴇʀ ʏɢ sᴘᴇᴋ ɴʏᴀ ɢᴇᴅᴇ\nUᴅʜ ɪᴛᴜ ᴀᴊᴀ\nSɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ .ʟɪsᴛᴍᴇɴᴜ`


  conn.sendMessage(m.chat, {
      text: text,
      contextInfo: {
      externalAdReply: {
      title: `Nezha - Md`,
      body: global.author,
      thumbnailUrl: foto,
      sourceUrl: `https://chat.whatsapp.com/GjWIyNygzjCKZy977UX0MG`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
  }
  
  handler.command = /^(menu)$/i
  handler.tags = ['main']
  handler.help = ['menu', 'help', '?']
  
  export default handler

function timeConvertA(input) {
    var now = new Date().getTime();
    var timeleft = input - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    return {day: days, hour: hours, minute: minutes, second: seconds}
}