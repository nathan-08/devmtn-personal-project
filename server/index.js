require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , session = require('express-session')
    , massive = require('massive')
    , nodemailer = require('nodemailer');

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
}, (accessToken, refreshToken, extraParams, profile, done) =>{
    /*what to request from social media site*/
    const db = app.get('db')
    let userData = profile._json
        , auth_id = userData.user_id.split('|')[1]
    console.log('profile._json: ', profile._json)
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
    successRedirect: 'http://localhost:3000/#/admin',
    failureRedirect: 'http://localhost:3000/#/'
}))

passport.serializeUser((ID, done)=>{
    console.log('serialized user')
    return done(null, ID)
})

passport.deserializeUser((ID, done)=>{
    console.log('deserialized user')
    const db = app.get('db')
    db.find_user_by_session([ID]).then ( user=> {
        return done(null, user)
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
    res.redirect('http://localhost:3000/#/')
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
    console.log('req.body: ',req.body)
    const quotesArray = req.body;
    db.delete_all_quotes().then(()=>{
        for(let i = 0; i < quotesArray.length; i++){
            db.add_quote(quotesArray[i].body, quotesArray[i].citation, quotesArray[i].cite_link)
        }
    })
})

/***nodemailer ********************************************************/
app.post('/contactus',  function create(req, res) {
    const newMessage = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }
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