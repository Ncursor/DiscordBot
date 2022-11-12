
                (async()=>{
                    const Config = require("./config.json");
                    const Discord = require("discord.js");
                    const Database = require("easy-json-database");
                    const moment = require('moment');
                    const { DB } = require("quickmongo");
                    const { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu } = require('discord.js')
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    const s4d = {
                        Discord,
                        database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
                        joiningMember:null,
                        reply:null,
                        tokenInvalid:false,
                        tokenError: null,
                        player:null,
                        checkMessageExists() {
                            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    };
                    s4d.client = new s4d.Discord.Client({
                        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                        partials: ["REACTION"]
                    });
                    const { Player,QueueRepeatMode } = require("discord-player")
                    s4d.player = new Player(s4d.client)
                    await s4d.client.login(Config.token).catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('interactionCreate', async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id)
  if ((interaction.commandName) == 'sayhi') {
    await interaction.reply({ ephemeral: true, content: 'hi', components: [] });
  }

});

                    return s4d;
                    })();
            
