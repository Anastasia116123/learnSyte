const http = require("http");

const host = "localhost";

const port = "3000"  
// или 3000

// http://localhost:8000

const requestListener = function (req, res){
  res.writeHead(200);
  res.end("Helo, server working well!");
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Сервер запущен на http://${host}:${post}`)
});

const obj = {
  b: '1',
  c: '1',
  id: '1',
}

console.log(obj.id);