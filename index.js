const http = require('http');
const hostname = '127.0.0.1'; //Ping back address
const port = 3000;


const server = http.createServer((req, res) => {
	switch (req.method.toLowerCase()) {
		case 'put':
			handlePut();
			break;
		case 'get':
			handleGet(req, res);
			break;
		case 'post':
			handlePost();
			break;
		case 'delete':
			handleDelete();
			break;
		default:
			burnItAll(res);
			break;
	}
});

function handlePut() {}

function handleGet(req, res) {
	switch(req.url) {
		case '/foo':
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/plain');
			const myData = { thing: 'mahBooo' };
			const payload = JSON.stringify(myData);
			res.end(payload);
			break;
		default:
			burnItAll(res);
			break;
	}
}
function handlePost() {}

function handleDelete() {}

function burnItAll(res) {
	res.statusCode = 500;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Encountered unhandled HTTP Method ${req.method}');
}

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
