const db = require('../database');
const serveError = require('../serve-error');
const sessions = require('../sessions');

/** @function createToast()
 * Creates a new post using the supplied form data
 */
function createTopic(req, res) {
  var subject = req.body.subject;
  var user = req.session.user.first;
  var userID = req.session.user.id;
  var date = new Date().valueOf();
  
  // Validate the input
  if(!subject) return serveError(req, res, 422, "Empty title or content encountered");
 
  // Publish the post to the database
  var info = db.prepare("INSERT INTO forum_topics (subject, user_id) VALUES (?, ?);").run(subject, userID);
  
  // Determine if the write succeeded
  if(info.changes !== 1) return serveError(req, res, 500, "Unable to write to database");
  
  // Redirect to the read page for the post
  res.writeHead(302, {"Location": '/forums'});
  res.end();
}

module.exports = createTopic;