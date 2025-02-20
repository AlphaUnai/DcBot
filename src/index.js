const { Client , IntentsBitField } = require('discord.js');
const { configIntents , keyComms , simboloComms } = require('./config');

//deberás crear un json con los datos sensibles
const { token } = require('./data.json');
    

const client = new Client({
    intents:configIntents
});

client.on('ready',(c) =>{
    console.log(`👾 ${c.user.tag} on-line, ${Date()}`);
})

client.on('messageCreate',(msg)=>{
  if(msg.content.includes(simboloComms)){
    nombreComando=msg.content.slice(1)
    if(keyComms.get(nombreComando)!==undefined){
        msg.reply(keyComms.get(nombreComando));
    }else{
        msg.reply('No hay ningún comando asignado');
    }
  }
})


client.login(token);
  