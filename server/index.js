require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , session = require('express-session')
    , massive = require('massive')
    , nodemailer = require('nodemailer')
    , ct1 = require('./db_controller1.js')

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
app.use(express.static(__dirname+ '/../build'))

app.use(passport.initialize())
app.use(passport.session())

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, (accessToken, refreshToken, extraParams, profile, done) =>{
    /*what to request from social media site*/
    const db = app.get('db')
    let userData = profile._json
        , auth_id = userData.user_id.split('|')[1]
    // console.log('profile._json: ', profile._json)
    db.find_user([auth_id]).then(user => {
        if (user[0]) {
            return done(null, user[0].id)
        } else {
            db.create_user([userData.given_name, userData.email, userData.picture, auth_id])
            .then( user=> done(null, user[0].id))
        }
    })
}))



/**ENDPOINTS */

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.FRONT_END_AUTH_SUCCESS,
    failureRedirect: process.env.FRONT_END_AUTH_FAILURE
}))

passport.serializeUser((ID, done)=>{
    console.log('serialized user, id:', ID)
    return done(null, ID)
})

passport.deserializeUser((ID, done)=>{
    console.log('deserialized user')
    const db = app.get('db')
    db.find_user_by_session([ID]).then ( user=> {
        return process.env.ADMIN_EMAILS.split(' ').includes(user[0].email) //admin email must be in .env        
        ? done(null, user) : null 
    })
})

app.get('/auth/me', (req,res,next)=>{
    if (!req.user) {
        res.status(401).send('LOG IN REQUIRED')
    } else {
        res.status(200).send(req.user)
    }
})
app.get('/auth/logout', (req,res,next)=>{
    req.logout()
    res.redirect(process.env.FRONT_END_AUTH_FAILURE)
})
// get quotes
app.get('/quotes', (req,res)=>{
    const db = app.get('db')
    db.get_quotes().then(quotes=>{
        res.status(200).send(quotes)
    })
})
// update quotes
app.put('/quotes/update', (req,res)=>{
    const db = app.get('db')
    const quotesArray = req.body;
    db.delete_all_quotes().then(()=>{
        for(let i = 0; i < quotesArray.length; i++){
            db.add_quote(quotesArray[i].body, quotesArray[i].citation, quotesArray[i].cite_link)
        }
    })
})
// add to reg_notice table
app.post('/regulatory-notice', (req, res)=>{
    const db = app.get('db')        
    const {date, title, summary, link} = req.body
    console.log('got this from front: ', date, title, summary, link)
    db.add_regulatory_notice(date, title, summary, link)
      .then(()=>{res.status(200).send('okeydokey artichokey')})
})
// get all reg_notices
app.get('/get-rn', (req,res)=>{
    const db = app.get('db')
    db.get_regulatory_notices().then(result=>{
        res.status(200).send(result)
    })
})
//delete reg_notice
app.delete('/delete-rn/:id', (req,res)=>{
    const db = app.get('db')
    db.delete_reg_notice(req.params.id).then(()=>{
        res.status(200)
    })
})
// get messages
app.get('/nodemailer', (req, res)=>{
    const db = app.get('db')
    db.get_messages().then(messages=>{
        res.status(200).send(messages)
    })
})
// update messages
app.post('/nodemailer', (req, res)=>{
    const db = app.get('db')
    db.delete_all_messages().then(()=>{
    for(let i = 0; i < req.body.length; i++){
        db.add_message(req.body[i].name, req.body[i].email, req.body[i].message, 'kevin.klundt@sirsco.com')
    }
    })
})
/***nodemailer ********************************************************/
app.post('/contactus',  function create(req, res) {
    const db = app.get('db')
    const newMessage = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }
    db.add_message(newMessage.name, newMessage.email, newMessage.message, 'kevin.klundt@sirsco.com')
    console.log('newMessage: ',newMessage);
    // node mailer code
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.gmailUser,
                pass: process.env.gmailPW,
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: `${req.body.name} 👻 <${req.body.email}>`, // sender address
            to: "nathanryan001@gmail.com", // list of receivers
            subject: `New Customer Query from ${newMessage.name}`, // Subject line
            text: '', // plain text body
            html: `<h1>${newMessage.name} wants to know more about SirsCo!</h1></br>
                    <p>${newMessage.message}</p>
                    <p>Customer Email Address: ${newMessage.email}</p>` // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            }
            console.log('Message sent: %s');
            res.sendStatus(200);
        });
    });
});
/****************** */
/**===================== */

/*           \ ^ - ^ /                    */
app.listen(process.env.SERVER_PORT, ()=> console.log('listening o _ o port: '+process.env.SERVER_PORT) )
/*                                        */