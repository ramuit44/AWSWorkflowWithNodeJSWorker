'use strict';

exports.invoke =  (event, context, callback) => {
  console.log(JSON.stringify(event));
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: `Sucessfully Processed ccits record`
          
        })
      });
}