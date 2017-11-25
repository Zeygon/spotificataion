const http = require('http');
const fs = require('fs');


const file = 'orange.jpeg'

const postData = Buffer(fs.readFileSync(file).toString('binary'),'binary');

const postData2 = JSON.stringify({
  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Richard_Stallman_-_F%C3%AAte_de_l%27Humanit%C3%A9_2014_-_010.jpg/800px-Richard_Stallman_-_F%C3%AAte_de_l%27Humanit%C3%A9_2014_-_010.jpg"
})

console.log(postData);

const options = {
  hostname: 'westus.api.cognitive.microsoft.com',
  port: 80,
  path: '/emotion/v1.0/recognize?',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
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
req.write(postData2);
req.end();
