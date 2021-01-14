const db = require('../database');
const templates = require('../templates');

/** @function homepage
 * Serves the home page 
 * @param {http.IncomingMessage} req - the request object 
 * @param {http.ServerResponse} res - the response object
 */
function serveForumpage(req, res) {
  // Get all posts in the database
  var topicID;
  var list1 = " ";
  var topics = db.prepare(`SELECT subject, 
  first || ' ' || last AS username, 
  (SELECT COUNT(id) FROM forum_posts WHERE forum_posts.forum_topic_id = forum_topics.id) as postCount,
  forum_topics.created_at AS date,
  forum_topics.id AS id
  FROM forum_topics 
  INNER JOIN users ON forum_topics.user_id = users.id
  ORDER BY forum_topics.created_at DESC;`).all();
  // Generate the html snippets
  var listHtml = templates['topic-list.html']({topics: topics});
  // Set the title
  // Generate the page html
  var html = templates['forumpage.html']({post: listHtml, list: list1, user: req.session && req.session.user});
  // Serve the HTML
  res.setHeader('Content-Type', "text/html");
  res.setHeader('Content-Length', html.length);
  res.end(html);
}

module.exports = serveForumpage;