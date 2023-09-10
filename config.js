import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['62857106777269', 'Izuka', true],
['6285710677726', 'Yuki', true]
] 
global.mods = []
global.prems = []
// Info
global.nomorwa = '62857106777269'
global.packname = 'Nezha-MD by'
global.author = '© Izuka'
global.namebot = 'Nezha-MD'
global.wm = '© Nezha-MD Izuka'
global.stickpack = 'Nezha-MD'
global.stickauth = '© Izuka'
// Link Sosmed
global.sig = 'https://instagram/izuka'
global.sgh = 'https://github.com/takashiizuka'
global.sgc = 'https://chat.whatsapp.com/Em1bK6aCg8P7tcT88ALmey'
// Donasi
global.psaweria = 'saweria.co/Izukaa'
global.ptrakterr = 'https://trakteer.id/izukaa/tip'
global.pdana = '0831-6296-4447'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = '7xv3bAZodG'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "7xv3bAZodG",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})