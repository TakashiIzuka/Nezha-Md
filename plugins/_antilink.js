const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)
    let hapus = m.key.participant
    let bang = m.key.id
    let warn = global.db.data.users[m.sender].warn
    if (chat.antiLink && isGroupLink && !isAdmin) {
       global.db.data.users[m.sender].warn += 1
        if (isBotAdmin && warn === 5) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }
        await m.reply(`Kamu Mendapatkan 1 Peringatan, Karna Menggunakan Kata Kasar...\n\nJika Peringatan Kamu Sampai 5 Kamu Akan Otomatis Di Keluarkan\n\nSekarang Kamu Memiliki ${warn} Peringatan\n\nKetik *maafkan saya yang mulia* Untuk Mengurangi Peringatan Kamu`)
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        if (isBotAdmin && bot.restrict) {
            return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender } })
        } else if (!bot.restrict) return m.reply('Owner disable auto kick!')
    }
    return !0
}
