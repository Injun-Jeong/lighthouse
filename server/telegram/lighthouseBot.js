const TelegramBot = require('node-telegram-bot-api');
const key = require('../../env/key.json');

const lighthouseBot = new TelegramBot(key["telegram token"], {polling: true});

lighthouseBot.on('message', (msg) => {
    lighthouseBot.sendMessage(key["telegram chatId"], 'recv msg');
});

module.exports = lighthouseBot;