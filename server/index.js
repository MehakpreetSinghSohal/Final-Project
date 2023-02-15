const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const Profiles = require("./models");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Connecting to database
mongoose.connect(
  "mongodb+srv://Kunwardeep:Kunw%40060802@cluster0.uyphxx6.mongodb.net/test",
  {
    dbName: "milan",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => (err ? console.log(err) : console.log("Connected to milan database"))
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});




//REGISTER NEW USER
app.post("/register", async (req, res) => {
  const profile = new Profiles(req.body.user);
  try {
    await profile.save();
    res.status(201).json(profile);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});





//LOGIN USER
app.post("/login", async (req, res) => {
  //setting a async function with req and res
  try {
    let phone = req.body.user.phone; //takig the email and password user enters in login page
    let password = req.body.user.password;

    useremail = await Profiles.findOne({ phone: phone }); //checking if the email is registered or not with us
    if (useremail.password === password) {
      useremail.isLogged = 1;
      await useremail.save();
      res.json(useremail);
    } else {
      res.send("incorrectpassword");
    }
  } catch (error) {
    res.status(400).send("notregistered");
  }
});





//AUTHENTICATE
app.post("/getinfo", async (req, res) => {
  //setting a async function with req and res
  try {
    useremail = await Profiles.findOne({ phone: req.body.uid }); //checking if the email is registered or not with us
    console.log(req.body.uid)
    if (useremail.isLogged == 1) {
      res.json(useremail);
    } else {
      res.send("incorrectpassword");
    }
  } catch (error) {
    res.status(400).send("notregistered");
  }
});




//GETSENTINFO
app.post("/getSentinfo", async (req, res) => {
  //setting a async function with req and res
  try {
    useremail = await Profiles.findOne({ phone: req.body.uid }); //checking if the email is registered or not with us
    console.log(req.body);
    res.json(useremail);
    
  } catch (error) {
    res.status(400).send("notregistered");
  }
});




//GETPROFILES
app.post("/getprofs", async (req, res) => {
  //setting a async function with req and res
  try {
    useremail = await Profiles.findOne({ phone: req.body.uid }); 
    
    if (useremail.isLogged == 1) {

      if(useremail.gender == "male"){
        
        profs = await Profiles.find({ gender: "female" });
        res.send(profs);
      }
      else if(useremail.gender == "female"){
        
        profs = await Profiles.find({ gender: "male" });
        res.send(profs);
      }else{
        profs = await Profiles.find();
        res.send(profs);
      }
    } else {
      res.send("incorrectpassword");
    }
  } catch (error) {
    res.status(400).send("notregistered");
  }
});







//SEND REQUESTS
app.post("/sendreq", async (req, res) => {
  try {
    from = await Profiles.findOne({ phone: req.body.from }); 
    to = await Profiles.findOne({ phone: req.body.to }); 
    
    if (from.isLogged == 1) {

        to.reqRecieved.push(req.body.from );
        from.reqSent.push(req.body.to );
        await from.save();
        await to.save();
        res.send("Perfect");
    } else {
      res.send("incorrectpassword");
    }
  } catch (error) {
    res.status(400).send("notregistered");
  }
});






//ACCEPT REQUESTS
app.post("/accept", async (req, res) => {
  try {
    from = await Profiles.findOne({ phone: req.body.from }); 
    to = await Profiles.findOne({ phone: req.body.to }); 
    console.log(from);
    
        to.reqRecieved.pull(req.body.from );
        to.Matches.push(req.body.from);
        from.reqSent.pull(req.body.to );
        from.Matches.push(req.body.to);
        
        await from.save();
        await to.save();
        res.send("Perfect");
    
  } catch (error) {
    res.status(400).send("notregistered");
  }
});







//UNSEND REQUESTS
app.post("/unsend", async (req, res) => {
  try {
    from = await Profiles.findOne({ phone: req.body.from }); 
    to = await Profiles.findOne({ phone: req.body.to }); 
    console.log(from);
    
        to.reqRecieved.pull(req.body.from );
        from.reqSent.pull(req.body.to );
        await from.save();
        await to.save();
        res.send("Perfect");
    
  } catch (error) {
    res.status(400).send("notregistered");
  }
});




//CHECK STATUS
app.post("/checkstat", async (req, res) => {
  try {
    from = await Profiles.findOne({ phone: req.body.from }); 
    let flag=false;
    if (from.isLogged == 1) {

        from.reqSent.map((id) => {
          if(id===req.body.to){
            flag=true;
          }
         
        })

        res.send(flag);
    }
    else {
      return res.send("incorrectpassword");
    }
  } catch (error) {
    return res.status(400).send("notregistered");
  }
});




//LOGOUT
app.post("/logout", async (req, res) => {
  //setting a async function with req and res
  try {
    useremail = await Profiles.findOne({ phone: req.body.uid }); //checking if the email is registered or not with us
    if (useremail.isLogged == 1) {
      useremail.isLogged = 0;
      await useremail.save();
      res.send("logout successfull");
    } else {
      res.send("incorrectpassword");
    }
  } catch (error) {
    res.status(400).send("notregistered");
  }
});

//UPDATEINFO
app.post("/updateinfo", async (req, res) => {
  //setting a async function with req and res
  try {
    var useremail = await Profiles.findOne({ phone: req.body.user.phone }); //checking if the email is registered or not with us
    newData = req.body.user;
    if (useremail.isLogged == 1) {
      useremail.name = newData.name;
      useremail.email = newData.email;
      useremail.phone = newData.phone;
      useremail.address = newData.address;
      useremail.city = newData.city;
      useremail.State = newData.State;
      useremail.job = newData.job;
      useremail.gender = newData.gender;
      useremail.religion = newData.religion;
      useremail.dob = newData.dob;
      useremail.language = newData.language;
      useremail.maritial = newData.maritial;
      useremail.bio = newData.bio;
      useremail.dp = newData.dp;

      await useremail.save();
      res.send("update successfull");
    } else {
      res.send("incorrectpassword");
    }
  } catch (error) {
    res.status(400).send("notregistered");
  }
});

app.listen(5000, () => {
  console.log("SERVER RUNNING ON PORT 5000");
});
