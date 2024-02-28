// Create web server
// Create a web server that listens on port 8080. When a client makes a request to the server, the server responds with a status code of 200 and the following JSON object: { "comments": [ "comment1", "comment2" ] }.

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ comments: [ 'comment1', 'comment2' ] }));
});

server.listen(8080, () => {
  console.log('Server is listening on port 8080...');
});
// When you run the code and make a request to the server with curl, you should see the following output:
// $ curl http://localhost:8080
// {"comments":["comment1","comment2"]}
// $ curl -i http://localhost:8080
// HTTP/1.1 200 OK
// Content-Type: application/json
// Date: Sun, 12 Sep 2021 14:56:20 GMT
// Connection: keep-alive
// Content-Length: 30
// {"comments":["comment1","comment2"]}