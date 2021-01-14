const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

var templates = {};
var files = fs.readdirSync('templates');

files.forEach((file) => {
  const templateString = fs.readFileSync(path.join('templates', file));
  templates[path.basename(file, '.ejs')] = ejs.compile(templateString.toString());
});

module.exports = templates;