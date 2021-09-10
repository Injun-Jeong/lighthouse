const express = require('express');
const lighthouseBot = require('./telegram/lighthouseBot');
const lighthouseSvc = require('./svc/lighthouse.svc');
const key = require('../env/key.json');
const app = express();
const port = 7777;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('start whale lighthouse');
});

app.listen(port, () => {
    console.log(`app listening at http://141.164.46.105:${port}`);
});

app.post('/lighthouse', (req, res) => {
    console.log('lighthouse receives data.');
    console.log(req.body);

    callSvc(req.body);
});

const callSvc = async function(data) {
    let res = await lighthouseSvc.detectWhale(data);

    if (res.detectYn == "Y") {
        lighthouseBot.sendMessage(key["telegram chatId"], res.cont);
    }
}

module.exports = app;