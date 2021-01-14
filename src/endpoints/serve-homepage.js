const templates = require('../templates');

function serveHomepage(req, res) {
  var html = templates['homepage.html']();
  // Serve the HTML
  res.setHeader('Content-Type', "text/html");
  res.setHeader('Content-Length', html.length);
  res.end(html);
}

module.exports = serveHomepage;