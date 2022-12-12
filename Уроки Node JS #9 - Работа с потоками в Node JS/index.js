const fs = require('fs')

const myReadShort = fs.createReadStream(__dirname + '/article.txt')
const myWriteShort = fs.createWriteStream(__dirname + '/news.txt')

myReadShort.on('data', function(chunk) {
    console.log('Новые данные получены: \n');
    myWriteShort.write(chunk)
})