const templates = require('../templates');
const db = require('../database');

/** @function showPost 
 * Serves the specified post as a resonse.  The post id should be in req.params.id
 * @param {http.IncomingMessage} req - the request object 
 * @param {http.ServerResponse} res - the response object 
 */
function showTopic(req, res) {
  // Determine the post ID
  
  const id = parseInt(req.params.id,10);
  // Retreive the post from the database 
  var topic = db.prepare("SELECT * FROM forum_topics WHERE id = ?").get(id);
  //post.date = new Date(post.date);
  // Get all posts in the database
  var posts = db.prepare(`SELECT subject, body, first || ' ' || last AS author, forum_topics.created_at AS date
  FROM forum_posts 
  INNER JOIN users ON forum_posts.user_id = users.id 
  INNER JOIN forum_topics ON forum_posts.forum_topic_id = forum_topics.id
  WHERE forum_topic_id = ?
  ORDER BY forum_posts.created_at ASC;`).all(id);
  // Set the title 
  //var title = post.title;
  // Generate the HTML
  var postHtml = templates['topic.html']({id: id, title: topic.subject, user: req.session && req.session.user});
  var listHtml = templates['post-list.html']({posts: posts});
  var html = templates['forumpage.html']({post: postHtml, list: listHtml, user: req.session.user});
  // Serve the HTML
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Length", html.length);
  res.end(html);
}

module.exports = showTopic;