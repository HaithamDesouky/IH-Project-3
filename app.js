'use strict';

const { join } = require('path');
const express = require('express');
const createError = require('http-errors');
const connectMongo = require('connect-mongo');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const serveFavicon = require('serve-favicon');
const bindUserToViewLocals = require('./middleware/bind-user-to-view-locals.js');
const passportConfigure = require('./passport-configuration.js');
const authenticationRouter = require('./routes/authentication');
const postRouter = require('./routes/post');
const itemRouter = require('./routes/item');
const userRouter = require('./routes/user');
const lootBoxRouter = require('./routes/lootBox');
const orderRouter = require('./routes/order');
const commentsRouter = require('./routes/comments');
const creditsRouter = require('./routes/credits');

const cors = require('cors');

const app = express();
app.set('trust proxy', 1);

app.use(
  cors({
    origin: [process.env.CLIENT_APP_URL],
    credentials: true
  })
);

app.use(serveFavicon(join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 24 * 15,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production'
      // httpOnly: true
      // secure: process.env.NODE_ENV === 'production'
    },
    store: new (connectMongo(expressSession))({
      mongooseConnection: mongoose.connection,
      ttl: 60 * 60 * 24
    })
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bindUserToViewLocals);

app.use('/post', postRouter);
app.use('/authentication', authenticationRouter);
app.use('/items', itemRouter);
app.use('/order', orderRouter);
app.use('/post', postRouter);
app.use('/authentication', authenticationRouter);
app.use('/items', itemRouter);
app.use('/user', userRouter);
app.use('/comments', commentsRouter);
app.use('/lootBoxes', lootBoxRouter);
app.use('/credits', creditsRouter);

userRouter;
// Catch missing routes and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Catch all error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ type: 'error', error: { message: error.message } });
});

module.exports = app;
