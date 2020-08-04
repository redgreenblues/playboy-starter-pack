const passport = require("passport");
const bcrypt = require("bcryptjs");

require('../config/user')(passport);
const User = require('../models/user-model');

module.exports = {
  login(req, res, next) {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.status(400).send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.status(201).send("Successfully Authenticated");
        });
      }
    })(req, res, next);
  },
  register(req, res) {
    User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.status(400).send("User Already Exists");
      if (!doc) {
        try {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);

          const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            profileImg: req.body.profileImg,
            profileBio: req.body.profileBio,
            password: hashedPassword,
          });
          await newUser.save();
          res.status(201).send('User created!');
        } catch (err) {
          console.log(err)
        }      
      }
    });
  },
  getUser(req, res) {
    res.send(req.user) // The req.user stores the entire user that has been authenticated inside of it. 
    //can be used for the rest of the app
  },
  logout(req, res) {
    req.logout();
    res.status(200).send('User logged out!')
  },
}