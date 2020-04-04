var qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();

const helper = require('./helper/messages');

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Whatsapp Web is ready for new Covid19 messages!');
});

client.on('message', msg => {
    helper.process_input(msg);
});

client.initialize();
