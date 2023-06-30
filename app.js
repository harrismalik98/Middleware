const express = require('express');
const app = express();

function myCustomMiddleware(req, res, next) {
  console.log('Executing myCustomMiddleware');
  next();
}


function myOtherMiddleware(req, res, next) {
  console.log('Executing myOtherMiddleware');
  next();
}


// Middleware function to log requests
const logger = (req, res, next) => {
  console.log(`Method:${req.method}, URL: ${req.url}`)
  next();
}
// next is a function that is used to pass control to the next middleware function. 


// app.use("/user", myCustomMiddleware, myOtherMiddleware);
// app.use() is a method provided by the Express.js framework that allows you to 
// add middleware functions or routers to an Express application.


app.get('/', myCustomMiddleware, myOtherMiddleware, logger, (req, res) => {
  // This function will handle GET requests to "/" after both middleware functions
  // have been executed then execute below code.
  console.log("Hello World!");
  res.send("Hello, world!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});


// Middleware in Node.js is a software component that acts as a bridge between a web application's 
// incoming HTTP request and its outgoing HTTP response. It is a way to modularize functionality in an 
// application, where multiple middleware functions can be chained together to perform various tasks such 
// as authentication, logging, and error handling.