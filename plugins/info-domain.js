import moment from 'moment'
let handler = async(m, {conn}) => {
let domain = timeConvertA(1722531600000)
let waktu = `Masa berlaku sampai: ${domain.day} Hari ${domain.hour} Jam ${domain.minute} Menit ${domain.second} Detik`
   conn.reply(m.chat, waktu, m, global.adReply)

}

   handler.tags = ['info']
   handler.command = /^(masaberlakudomain|domain)$/i
   handler.help = ['masaberlakudomain' ,'domain']
   
   
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