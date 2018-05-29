'use strict';

exports.process =  (event, context, callback) => {
  console.log("Enrolment Id :" + event.Id);

    callback(null, {
        status: "success",
        Id: event.Id,
        Operation: event.Operation
      });
}