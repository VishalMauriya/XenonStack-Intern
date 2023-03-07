const express = require("express");
const mongoose = require("mongoose");
// const validator = require("validator");
// const { default: isEmail } = require("validator/lib/isemail");

const userSignupSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    // validate(value) {
    //   if (!validator.isEmail(value)) {
    //     throw new Error("Invalid Email Id");
    //   }
    // },
  },

  password: {
    type: String,
    required: true,
    minLength: 3,
  },

  date:{
      type:Date,
      default:Date.now
  }
});


const UserSignup = mongoose.model('UserSignup', userSignupSchema);

module.exports = UserSignup;