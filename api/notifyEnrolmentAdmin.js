'use strict';
var https = require("https");
var http = require("http");
var AWS = require('aws-sdk');




exports.notify =  (event, context, callback) => {
console.log("Enrolment Id :" + event.Id);

AWS.config.update({
  accessKeyId: "AKIAJOCXSRFXBOE54IWA",
  secretAccessKey: "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",
  region: "us-east-1"
});

var ses = new AWS.SES();

const params = {
    Destination: {
      ToAddresses: [ "rams.sri@gmail.com" ],
    },
    Message: {
      Subject: {
        Data: event.Operation + " - Enrolment - Notify Admin",
        Charset: 'UTF-8'
      },
      Body: {
        Text: {
          Data: "New Enroment with Id "+event.EnrolmentId+ " initiated. Please check.",
          Charset: "UTF-8"
        }
      }
    },
    Source: "rams.sri@gmail.com"
  };


//   function CustomError(message) {
//     this.name = 'CustomError';
//     this.message = message;
// }
// CustomError.prototype = new Error();
// const error = new CustomError('This is a custom error!');
// callback(error);

     

    ses.sendEmail(params, function(err) {
    console.log("NotifyEnrolmentAdmin");
    console.log(err);
    callback(null, {
        status: "success",
        Id: event.Id,
        Operation: event.Operation
      });
  })
}