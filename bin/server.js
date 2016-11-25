var app = require("../dist/app");

var defaultPort = 8080;
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

const port = process.argv[2];

app.listen(port, () => {
  console.log("Serving application on port " + port + ".");
});
