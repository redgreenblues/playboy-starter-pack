// Dependencies

const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();

// Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app we are connecting to
    credentials: true,
  })
);


app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());

// Imports
require('./db');
const { MemesRouter, GifsRouter, PunsRouter, usersRouter } = require('./routes');

// Routes
app.use('/app', MemesRouter, GifsRouter, PunsRouter, usersRouter);


// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
