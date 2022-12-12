// 1 Пример метода pipe()
// const fs = require('fs')

// const myReadShort = fs.createReadStream(__dirname + '/article.txt')
// const myWriteShort = fs.createWriteStream(__dirname + '/news.txt')

// myReadShort.pipe(myWriteShort)



// 2 Пример метода pipe() на сервере
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function(req, res) {
//     console.log('URL страницы: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
//     const myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf8')
//     myReadShort.pipe(res)
// })

// server.listen(3000, '127.0.0.1')
// console.log('Отслеживание порта: 3000');

