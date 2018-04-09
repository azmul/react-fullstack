const express = require('express');
const passort = require('passport');
const GoogleStrategy = require('passport-google-oauth20').GoogleStrategy;

const app = express();
passort.use(new GoogleStrategy());

app.get('/',(req,res)=>{
   res.send({hi:'Buddy'})
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);