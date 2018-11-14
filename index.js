const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();


bot.on("ready", async () => {

    console.log(`${bot.user.username} De bot is weer lekker aan het denken!`)

    bot.user.setActivity("Met code's", {type: "PLAYING"});

});

bot.login(botConfig.token);