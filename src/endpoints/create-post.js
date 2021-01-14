
const db = require('../database');
const serveError = require('../serve-error');

/** @function createPost()
 * Creates a new post using the supplied form data
 */
function createPost(req, res) {
  var content = req.body.content;
  var userID = req.session.user.id;
  var date = new Date().valueOf();
  const id = parseInt(req.params.id, 10);
  console.log(id);
  console.log(typeof(userID));
  console.log(req.params.id);
  // Validate the input
  if(!content) return serveError(req, res, 422, "Empty title or content encountered");
  
  // Publish the post to the database
  var info = db.prepare("INSERT INTO forum_posts (body, forum_topic_id, user_id) VALUES (?,?,?);").run(content, id, userID);
  
  // Determine if the write succeeded
  if(info.changes !== 1) return serveError(req, res, 500, "Unable to write to database");
  
  // Redirect to the read page for the post
  res.writeHead(302, {"Location": `/forums/topic/${id}`});
  res.end();
}

module.exports = createPost;