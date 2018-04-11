const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
const keys = require('./config/keys');

app.get('/',(req,res)=>{
   res.send({hi:'Buddy'})
})

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken)=>{
        console.log(accessToken);
       }
    )
);

app.get(
    '/auth/google',
    passport.authenticate('google',{
       scope:['profile','email']
    })
);

app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log('Server running on 5000 port')
});