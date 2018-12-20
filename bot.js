const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523048543133630465")
setInterval(function() {
channel.send(`Mortazaa مش نصاب`);
}, 30)
})

client.login("NTI1MzMxODg3MjU0OTI5NDI4.Dv2KFQ.MFu4bXZqKif3QkYBFJPmhAVGOWM");
