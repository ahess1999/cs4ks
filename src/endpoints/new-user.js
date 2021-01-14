const templates = require('../templates');

function newUser(req, res) {
  var form = templates["signup.html"]({
    errorMessage: ""
  });
  var html = templates["forumpage.html"]({
    post: form,
    list: "",
    user: req.session && req.session.user
  });
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Length", html.length);
  res.end(html);
}

module.exports = newUser;