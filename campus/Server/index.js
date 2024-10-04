const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const SignupModel = require('./models/Signup')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Campus-Scanshield");

app.post('/login', (req, res) => {
    const {email,password} = req.body;
    SignupModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password) {
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
  });

  app.post('/Signup', async (req, res) => {
    try {
      // Check if user with the same email already exists
      const existingUser = await SignupModel.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Create a new user if email doesn't exist
      const newUser = await SignupModel.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  

app.listen(3001 , () => {
    console.log("server is running")
})
