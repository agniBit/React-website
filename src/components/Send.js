// const express = require('express');
const nodemailer = require('nodemailer');

function Send(){
    // get('/send',(req,res) =>{
    //     res.send("eiuaewkbbiue");
    // });

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'eusebio.weber72@ethereal.email',
            pass: 'zABDRmH5eCJPYAc6su'
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Nikhil batteries" <eusebio.weber72@ethereal.email>', // sender address
        to: "agni.abhi00@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

    main().catch(console.error);

    return('lankwerif')

}

export default Send;