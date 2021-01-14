const http = require('http');
const app = require('./src/app');
require('./src/database');
require('./src/templates');

const port = 3000;

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});