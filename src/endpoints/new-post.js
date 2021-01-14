const templates = require('../templates');

/** @function newPost 
 * Serves the form for creating a new post 
 * @param {http.IncomingMessage} req - the request object 
 * @param {http.ServerResponse} res - the response object
 */
function newPost(req, res) {
  const id = parseInt(req.params.id, 10);
  console.log(req.params.id);
  var form = templates["new-post.html"]({id : id});
  var html = templates["forumpage.html"]({post: form, list: "", user: req.session && req.session.user})
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Length", "text/html");
  res.end(html);
}

module.exports = newPost;