const url = require('url');
const http = require('http');
const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));

if (argv.hasOwnProperty('h')) {
	console.log('logHttp - simple Echo Server for testing');
	console.log(' ');
	console.log(' -h : display this help');
	console.log(' -s : set status code for response');
	console.log(' -p : set listening port for server');

	process.exit();
}
const statusCode = argv['s'] ? argv['s'] : 200;
const serverPort = argv['p'] ? argv['p'] : 3000;
const headerFile = argv['e'] ? argv['e'] : 'headerStandard.json';
const bodyFile = argv['b'] ? argv['b'] : 'bodyStandard.json';


console.log("Using Status Code ", statusCode);

const app = http.createServer((req, res) => {
  query = url.parse(req.url, true).query;
  console.log("Incoming request");

	console.log(req.headers);
  res.writeHead(statusCode, writeHeaderJSON()); 
  if ((statusCode >= 200) && (statusCode < 400)) {
		res.write(JSON.stringify(writeBodyJSON()));
	}
	res.end();
});


function writeHeaderJSON(res) {
	console.log('Using ' + headerFile + ' as returned Headers');
	let content = fs.readFileSync(headerFile);
 	jsonContent =  JSON.parse(content);
	return jsonContent; 
}

function writeBodyJSON(res) {
	console.log('Using ' + bodyFile + ' as returned Body');
	let content = fs.readFileSync(bodyFile);
 	jsonContent =  JSON.parse(content);
	return jsonContent; 
}


console.log("Starting Server on Port " + serverPort);
app.listen(serverPort);