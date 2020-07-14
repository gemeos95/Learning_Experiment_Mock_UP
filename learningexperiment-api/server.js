const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Signature = require('./models/signature.js');
const BlogPost = require('./models/BlogPost.js');
const EventPost = require('./models/EventPost.js');
const port = 3000;
const url = 'mongodb://admin:admin1@ds249873.mlab.com:49873/learningexperiment'
/*

that was passed to params ended up in the URL query string. This is what it’s for.
So now you know: params for query string, data for request body. Simple.
*/
app.use(bodyParser.json());//because it´s amidlewear
app.use(cors());


app.get('/', (req,res) =>{
res.send("ok!")
});


     
      
//====GET ALL SIGNATURES===//

//==========================//

//====POST NEW SIGNATURE===//

app.get('/api/signatures', (req,res) =>{
Signature.find((err, users) =>{
    res.send(users);
})
});

app.get('/api/BlogPost', (req,res) =>{
BlogPost.find((err, postdata) =>{
    res.send(postdata);
})
});

app.get('/api/EventsPost', (req,res) =>{
EventPost.find((err, eventdata) =>{
    res.send(eventdata);
})
});

app.post('/api/signatures',(req,res,next) =>{
  const{ body } = req;
  const {
    guestSignature,
  } = body;

 let {message} = body;

  if (!message) {
        return res.send({
         success: false,
         message: 'Error : Send a message.'   
        });
      }

      if (!guestSignature) {
        return res.send({
         success: false,
         message: 'Error : Name cannot be balnk.'   
        });
      }

      const newSignature = new Signature ();
          newSignature.guestSignature = guestSignature;
          newSignature.message = message;
          //console.log(newSignature,'the new object created');

          newSignature.save((err, user) =>{ // save the new user
                  //again another built in function takes the response will be equal to the array newUser
            //console.log(user,'user inside save');
            if (err) {
            return res.send({
              success: false,
              message:'Error: Server error'
            });
          }
          else{return res.send({
              success: true,
              message:'OK!'
            });} 
           
        });



});
//==========================//



//====MONGOOSE CONNECT===//
mongoose.connect(url, function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', url);
 }
});
//==========================//

app.listen(/*process.env.PORT ||*/ 3000, () =>{ 
  console.log(port)
  //console.log(`app is running on port ${process.env.PORT}`);
})
//it will try to run from mongolab, but if it can’t make the connection, it will still listen on port 3000 by default. 