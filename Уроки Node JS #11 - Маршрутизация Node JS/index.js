const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
    if(req.url === '/index' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res)
    }else if(req.url === '/text') {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
        res.end('Всё работает!')
    }else if(req.url === '/json') {
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'})
        const obj = {
            model: 'BWM',
            speed: '298km',
            wheels: 4
        }
        res.end(JSON.stringify(obj))
    }else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'})
        res.end('Ошибка 404')
    }
})

server.listen(3000, '127.0.0.1')
console.log('Отслеживание порта: 3000');