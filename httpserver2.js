const http = require('http');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);

  let html = '';
  if(req.url === '/') {
    res.statusCode = 200;
    html = '<h1>こんにちは、KCG!</h1>';
  }
  else {
    // URL が存在しないとき
    res.statusCode = 404;
    html = `<h1>404 Not Found</h1>${req.url}はありません。`;
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8');  
  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`Starting HTTP server at http://${hostname}:${port}/`)
});
