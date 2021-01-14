const templates = require('../templates');

/** @function newPost 
 * Serves the form for creating a new post 
 * @param {http.IncomingMessage} req - the request object 
 * @param {http.ServerResponse} res - the response object
 */
function newTopic(req, res) {
  var form = templates["new-topic.html"]();
  var html = templates["forumpage.html"]({post: form, list: "", user: req.session && req.session.user})
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Length", "text/html");
  res.end(html);
}

module.exports = newTopic;