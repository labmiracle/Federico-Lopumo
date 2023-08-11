const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/miraclelab') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Página de MiracleLab</h1>');
  } else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Acerca de nosotros</h1>');
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>404 - Página no encontrada</h1>');
  }
});

server.listen(5000, () => {
  console.log('El servidor está escuchando en el puerto 5000');
});
