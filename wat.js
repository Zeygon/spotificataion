const http = require('http');
const fs = require('fs');


const file = 'orange.jpeg'

const postData = Buffer(fs.readFileSync(file).toString('binary'),'binary');

console.log(postData);

const options = {
  hostname: 'westus.api.cognitive.microsoft.com',
  port: 80,
  path: '/emotion/v1.0/recognize?',
  method: 'POST',
  headers: {
    'Content-Type': 'application/octet-stream',
    'Ocp-Apim-Subscription-Key': '0249d1bf35c44789a9fac14b19a330d0',
    //'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();
