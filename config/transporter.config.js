const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({

    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'karolinaruedapagina@gmail.com',
        pass: '123contra.'
    },
    tls: { rejectUnauthorized: false }
})

module.exports = transporter