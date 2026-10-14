const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => qrcode.generate(qr, {small: true}));

client.on('ready', () => {
  console.log('Bot is ready!');
});

client.on('message', async msg => {
  if (msg.body.includes('http://') ||
      msg.body.includes('https://')) {
    await msg.reply('⚠️ لطفاً لینک نفرست!');
    await msg.delete(true);
  }
});

client.initialize();