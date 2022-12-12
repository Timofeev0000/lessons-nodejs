const fs = require('fs')

const file_readed = fs.readFileSync('text.txt', 'utf-8')
const message = 'Привет мир!\n' + file_readed
fs.writeFileSync('some_new_file.txt', message)