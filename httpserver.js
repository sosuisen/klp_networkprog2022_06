const http = require('http');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  /*
    write('文字列') でレスポンス本体を書き込んで、end() でクライアントへの返信を終了。
    まとめて end('文字列') とすることもできる
    res.write('こんにちは、KCG!');
    res.end();
  */ 
  res.end('<h1>こんにちは、KCG!</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Starting HTTP server at http://${hostname}:${port}/`)
});
