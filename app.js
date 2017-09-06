//Initialization
var express = require('express');
var path = require('path');
var app = express();
var controllers = require('./controllers/controller');
require('dotenv').config();//Configure the Database
var port     = process.env.PORT || 8080;
var bodyParser = require('body-parser');//Start Body Parser
var cookieParser = require('cookie-parser');//Start Cookie Parser
var bcrypt = require('bcryptjs');//Call Password Encryption
var session = require('express-session');//Session
var passport = require('passport');//Passport Authentication
var LocalStrategy = require('passport-local').Strategy;//Local
var connectDB = require('./config/database.js');//Connect MySQL
var con = connectDB.config();//Connect DB
// var MySQLStore = require('express-mysql-session');

//set up templete engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());
//static files
app.use(express.static('./public'));

var sess = {
  secret: 'fjsadjaljsljaew',
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 30*24*60*60*60}
}

app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());


//Login Authentication
passport.use(new LocalStrategy(
  function(username, password, done) {
  	con.query('SELECT password, aid FROM admin WHERE email=?', [username], function(err, result, feild){
  		if(err) done(err);
  		// bcrypt.hash(password, 10, function(err, hashed){
  		// 	console.log(password+' = '+hashed);
  		// });

  		if(result.length === 0)	return done(null, false, {message: 'Username is Not Exists'});
      const userId = result[0].aid;
      console.log(userId);
  		const hash = result[0].password;
  		bcrypt.compare(password, hash, function(err, respond){
  			if (respond===true) {
          // console.log(sess.view)

  				return done(null, userId, {message: 'Success...'});
  			}else{
  				return done(null, false, {message: 'Invalid Username and Password'});
  			}
  		});
  	});
  }
));
//fire controller
controllers(app, con);


passport.serializeUser(function(user_id, done) {
  done(null, user_id);
});

passport.deserializeUser(function(user_id, done) {
    done(null, user_id);
});


//URL Validation


//Listen Port
app.listen(port);
console.log('Your website listen port: '+port);
