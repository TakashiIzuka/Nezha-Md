let handler  = async (m, { conn }) => {

   conn.sendFile (m.chat, 'https://telegra.ph/file/cb2828b7dd0a55906168b.jpg', 'anjai', 'tes', m, global.adReply)

}

handler.command = /^(poto)$/i

export default handler