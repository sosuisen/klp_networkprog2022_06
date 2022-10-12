const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 8080;
const documentRoot = './static';

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);

  let html = '';

  let url = req.url;
  if (url === '/') url = '/index.html';

  const notFound = `<h1>404 Not Found</h1>${url}はありません。`;

  let contentType = 'text/html; charset=utf-8';
  let encoding = 'utf-8';
  if (url.endsWith('.css')) contentType = 'text/css; charset=utf-8';
  else if (url.endsWith('.jpg')) {
    // バイナリファイルの場合 null を設定
    // https://nodejs.org/api/fs.html#fsreadfilepath-options-callback
    encoding = null;
    contentType = 'image/jpeg';
  }

  fs.readFile(`${documentRoot}${url}`, encoding, (err, data) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    if (err) res.end(notFound);
    else res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Starting HTTP server at http://${hostname}:${port}/`)
});