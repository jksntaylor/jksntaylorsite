const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const {PORT, EMAIL, PASSWORD} = process.env

const app = express();

app.use(bodyParser.json());

app.use( express.static(`${__dirname}/../build`));

const nodemailer = require('nodemailer');


const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: EMAIL,
        pass: PASSWORD
    }
})

app.post('/sendemail', (req, res) => {
    const {name, title, message} = req.body;
    const mailOptions = {
        from: EMAIL,
        to: EMAIL,
        subject: `WEBSITE MESSAGE || ${name} || ${title}`,
        text: message
    }

    transport.sendMail(mailOptions).then(() => {
        res.sendStatus(200);
    }).catch(() => {
        res.sendStatus(500);
    })
})

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });

app.listen(PORT, () => {
    console.log('jksn listening on port', PORT)
})