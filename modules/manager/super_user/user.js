"use strict";

let _ = require("lodash"),
  EmployeesModel = require("../../models/organization_management/Organization_user"),
  
   nodemailer = require('nodemailer')
   
 



let addEmployees = async (user, req) => {
  let body = req.body.body ? JSON.parse(req.body.body) : req.body;
  let createData = {
    user_name:body.user_name,
    user_age:body.user_age,
    user_email:body.user_email,
    user_phone:body.user_phone,
    user_city:body.user_city,
    Image:body.image
  };
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'noreplytuborgcricketleague@gmail.com',
      pass: 'cfyrmigcdlqydoqe'
    }
  });


  const mailOptions = {
    from: 'noreplytuborgcricketleague@gmail.com',
    to: body.user_email,
    subject: 'Tuborg cricket league.',
    html: '<h1>Hello!</h1><p>Thank you for participating in the Tuborg Cricket League. We hope you had fun and enjoyed playing the game and taking selfie.</p><br><p>Attached is the selfie you took with Tuborg Zero Soda— we hope you liked it!</p><br><p>Look forward to you sharing your selfie with your friends and family on social media by tagging us @tuborgzerosoda with #TuborgZeroSoda #OpenToMore to get featured.</p> <br><p>Let/’s open ourselves to more excitement with Tuborg Zero Soda!</p><br><p>Best Wishes,<p><br><p>Tuborg Zero Soda</p>',
    // text: "Hello, <br> Thank you for participating in the Tuborg Cricket League. We hope you had fun and enjoyed",
    attachments: [
      {
        filename: 'image.jpg',
        path: body.image,
        cid: 'my-image'
      }
    ]
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

 






  return EmployeesModel(createData).save();




};

module.exports = {
  
  addEmployees,
 
 
};
