import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const server = createServer(async (req, res) => {
	try {
	if (req.url === '/banner.png') {
	const img = await readFile('./banner.png');
	res.writeHead(200, { 'content-type': 'Image/png' });
	res.end(img);
	} else if (req.url === '/') {
	const html = await readFile('./redchan.html', 'utf-8');
	res.writeHead(200, { 'content-type': 'text/html' });
	res.end(html);
	} else {
	res.writeHead(404, { 'content-type': 'text/plain' });
	res.end('page not found');
	}
} catch (err) {
	res.writeHead(500, { 'content-type': 'text/plain' });
	res.end('server error');
  }
});
	
	const PORT = process.env.PORT || 3000;
	server.listen(PORT, '0.0.0.0', () => {
    console.log(`server running on port ${PORT}`);
});