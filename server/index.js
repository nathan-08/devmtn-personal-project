require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , session = require('express-session')
    , massive = require('massive')

const app = express()
app.use(cors())
app.use(bodyParser.json())

massive(process.env.DB_CONNECTION).then(db => {
    app.set('db', db)
})

app.use(session({
    resave: false, 
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET
}))
//app.use(express.static(__dirname+ '/../build'))

app.use(passport.initialize())
app.use(passport.session())

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, (accesToken, refreshToken, extraParams, profile, done) =>{
    /*what to request from social media site*/
    const db = app.get('db')
    let userData = profile._json
        , auth_id = userData.user_id.split('|')[1]
    db.find_user([auth_id]).then(user => {
        if (user[0]) {
            return done(null, user[0].id)
        } else {
            db.create_user([userData.name, userData.email, userData.picture, auth_id])
            .then( user=> done(null, user[0].id))
        }
    })
}))

passport.serializeUser((ID, done)=>{
    done(null, ID)
})

passport.deserializeUser((user, done)=>{
    const db = app.get('db')
    db.find_user_by_session([user]).then ( user=> {
        done(null, user[0])
    })
})

/**ENDPOINTS */
app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/contact',
    failureRedirect: 'http://localhost:3000/#/'
}))

app.get('/auth/me', (req,res,next)=>{
    if (!req.user) {
        res.status(401).send('LOG IN REQUIRED')
    } else {
        res.status(200).send(req.user)
    }
})
app.get('/auth/logout', (req,res,next)=>{
    req.logout()
    res.redirect('http://localhost:3000/#/')
})


/**===================== */

/*           \ ^ - ^ /                    */
app.listen(process.env.SERVER_PORT, ()=> console.log('listening o _ o ') )
/*                                        */