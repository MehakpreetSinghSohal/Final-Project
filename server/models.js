const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    unique:true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    "default": ""
  },
  city: {
    type: String,
    "default": ""
  },
  State: {
    type: String,
    "default": ""
  },
  job: {
    type: String,
    "default": ""
  },
  gender: {
    type: String,
    "default": ""
  },
  religion: {
    type: String,
    "default": ""
  },
  dob: {
    type: String,
    "default": ""
  },
  language: {
    type: String,
    "default": ""
  },
  maritial: {
    type: String,
    "default": ""
  },
  bio: {
    type: String,
    "default": ""
  },
  dp: {
    type: String,
    "default": ""
  },
  isLogged:{
    type:Boolean,
    "default": 0
  },
  reqSent : { type : Array , "default" : [] },
  reqRecieved : { type : Array , "default" : [] },
  Matches : { type : Array , "default" : [] },

},{ collection: 'users'});

const Profiles = mongoose.model("Profiles", UserSchema);

module.exports = Profiles;