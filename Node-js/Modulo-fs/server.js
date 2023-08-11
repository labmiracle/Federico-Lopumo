// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('¡Hola, mundo!');
  } else if (req.url === '/about') {
    const filePath = path.join(__dirname, 'vistas', 'about.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Error 404 - Archivo no encontrado');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Error 404 - Página no encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor en funcionamiento en http://localhost:3000/');
});
