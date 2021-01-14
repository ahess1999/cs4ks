const express = require("express");
const serveHomepage = require('./endpoints/serve-homepage');
const serveStandards = require('./endpoints/serve-standards');
const loadBody = require('./middleware/load-body');
const serveForums = require('./endpoints/serve-forumpage');
const newUser = require('./endpoints/new-user.js');
const createUser = require('./endpoints/create-user');
const newSession = require('./endpoints/new-session');
const createSession = require('./endpoints/create-session');
const loadSession = require('./middleware/loadSession.js');
const destroySession = require('./endpoints/destroy-session');
const newTopic = require('./endpoints/new-topic');
const createTopic = require('./endpoints/create-topic');
const showTopic = require('./endpoints/show-topic');
const newPost = require('./endpoints/new-post');
const createPost = require('./endpoints/create-post');
const usersOnly = require('./middleware/users-only');

var app = express();
app.use(loadSession);

app.get('/', serveHomepage);

app.get('/standards', serveStandards);

app.get('/forums', serveForums);

app.get("/forums/topics/new", usersOnly, newTopic);
app.post("/forums", loadBody, createTopic);
app.get("/forums/topic/:id", showTopic);
app.get("/forums/topic/:id/new", newPost);
app.post("/forums/topic/:id", loadBody, createPost);

app.get("/signup", newUser);
app.post("/signup", loadBody, createUser);

app.get('/signin', newSession);
app.post("/signin", loadBody, createSession);

app.get("/signout", destroySession);

app.use(express.static('public'));

module.exports = app;