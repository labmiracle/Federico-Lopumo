const http = require('http');

if (process.argv.length < 3) {
  console.log('Usage: node earthquakes.js <magnitude>');
  process.exit(1);
}

const magnitude = parseFloat(process.argv[2]);
if (isNaN(magnitude)) {
  console.log('Magnitude should be a valid number');
  process.exit(1);
}

const url = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson`;

http.get(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    const earthquakes = JSON.parse(data);
    console.log(`USGS All Earthquakes, Past Hour`);
    console.log(`---------------------`);
    console.log(`total: ${earthquakes.metadata.count}`);
    console.log(`status: ${response.statusCode}`);
    console.log(`---------------------`);
    
    earthquakes.features.forEach((earthquake) => {
      if (earthquake.properties.mag >= magnitude) {
        console.log(`${earthquake.properties.time}`);
        console.log(`==============================`);
        console.log(`M ${earthquake.properties.mag} - ${earthquake.properties.place}`);
        console.log(`Magnitud: ${earthquake.properties.mag}`);
        console.log(`Estatus: ${earthquake.properties.status}`);
        console.log(`Tipo: ${earthquake.properties.type}`);
        console.log(`Lugar: ${earthquake.properties.place}`);
        console.log(`Coordenadas: ${earthquake.geometry.coordinates}`);
        console.log(`Info: ${earthquake.properties.url}`);
        console.log(`Detalles: ${earthquake.properties.detail}`);
        console.log(`==============================`);
      }
    });
  });
}).on('error', (error) => {
  console.error('Error:', error.message);
});
