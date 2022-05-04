const app = require('../../index');
const http = require('http');
const conn = require("../../util/mongodb");

const port = process.env.PORT || '3001';
app.set('port', port);

// Create HTTP server.
http.createServer(app).listen(port, null, () => console.log(`LISTENING ON PORT ${port}`))
