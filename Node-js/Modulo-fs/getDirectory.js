const fs = require('fs');

const currentDirectory = process.cwd();
console.log(`Directorio actual: ${currentDirectory}`);

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Valor de __dirname: ${__dirname}`);
});

server.listen(3000, () => {
  console.log('Servidor en funcionamiento en http://localhost:3000/');
});

