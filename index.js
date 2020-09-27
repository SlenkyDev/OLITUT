///////////////////
/////OLITUT BOT////
///////////////////

const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '=';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
const Constants = require('discord.js/src/util/Constants.js')
Constants.DefaultOptions.ws.properties.$browser = `Discord iOS`
client.on("ready", () => {
  console.log("Loading status..")
  client.user.setActivity(`to my masters baby voice`, { type: 2, browser: "DISCORD IOS"  });
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.login("NzE2OTQ5ODYxMjQwNDA2MDQ4.XtTNlw.mn2MYmKYFMidDrK80UkhZ5ZyURM"); //dole!

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////