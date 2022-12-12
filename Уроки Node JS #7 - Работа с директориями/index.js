const fs = require('fs')

// fs.writeFile('some_new_file.txt', 'Текст файла', function() {}) Создание файла 
// fs.unlink('file.txt', function() {})    Удаление файла

// fs.mkdirSync('new-one') Создание папки
// fs.rmdirSync('new-one') Удаление папки


// функция создания папки, в ней файла с текстом
// fs.mkdir('new-one', function() {
//     fs.writeFile('./new-one/text.txt', 'Привет', function() {
//         console.log('Всё сработало');
//     })
// })


// Функция по удалению папки, и файла внутри неё
// fs.unlink('./new-one/text.txt', function() {
//     fs.rmdir('new-one', function() {
//         console.log('Всё сработало, папка с файлом успешно удалены');
//     })
// })