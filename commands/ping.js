module.exports = {
    name: 'ping',
    description: "ping command!",
    execute(message, args){
        message.channel.send('P O N G!');
    }
}

//PING COMMAND