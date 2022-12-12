// Пример работы c HTML
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function(req, res) {
//     console.log('URL страницы: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
//     const myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8')
//     myReadShort.pipe(res)
// })

// server.listen(3000, '127.0.0.1')
// console.log('Отслеживание порта: 3000');



// Пример работы с JSON
// const http = require('http')

// const server = http.createServer(function(req, res) {
//     console.log('URL страницы: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'})
//     const obj = {
//         model: 'BMW',
//         speed: '300km',
//         wheels: 4
//     }
//     res.end(JSON.stringify(obj))
// })

// server.listen(3000, '127.0.0.1')
// console.log('Отслеживание порта: 3000');