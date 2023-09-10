let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/ce992cdbcd0ea831f0041.jpg'
let sewa = `Hai Kak, Ingin Donasi?, Silahkan Donasi Ke Payment Yang Ada Di Bawah, Dengan Kamu Berdonasi Berarti Kamu Berkontribusi Dalam Perkembangan Bot Ini..


❏──「 *Payment* 」
│ • *Dana:* [${global.pdana}]
│ • *Trakteer:* [${global.ptrakterr}]
│ • *Saweria:* [${global.psaweria}]
│ • *Qris:* https://telegra.ph/file/704d10dcdc435c7d31524.jpg
❏──────────────๑


Terima Kasih Yang Sudah Donasi, Berapapun Donasi Kamu Akan Sangat Saya Hargain >,<
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

export default handler