const { IntentsBitField, EmbedBuilder } = require('discord.js');

//Para no incluir o excluir un intent, comenta o descomenta la línea
const intents=[
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildModeration,
    IntentsBitField.Flags.GuildExpressions,
    IntentsBitField.Flags.GuildIntegrations,
    IntentsBitField.Flags.GuildWebhooks,
    IntentsBitField.Flags.GuildInvites,
    IntentsBitField.Flags.GuildVoiceStates,
    IntentsBitField.Flags.GuildPresences,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMessageReactions,
    IntentsBitField.Flags.GuildMessageTyping,
    IntentsBitField.Flags.GuildMessagePolls,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.DirectMessagePolls,
    IntentsBitField.Flags.DirectMessageReactions,
    IntentsBitField.Flags.DirectMessageTyping,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.AutoModerationConfiguration,
    IntentsBitField.Flags.AutoModerationExecution,
];

const keyCommands= new Map([
    ["comTexto","respuesta"],
    ["comEmbed", {embeds: [new EmbedBuilder()
        .setTitle("EmbedTitle")
        .setDescription("EmbedDescription")
        .setColor('Purple')
        .setFields([
            {
                name:'Titulo campo',
                value:'Valor random',
                inline:true
            }
        ])
    ] }],
]);

const simboloComms='º'



module.exports ={
    configIntents:intents,
    keyComms:keyCommands,
    simboloComms:simboloComms,
}