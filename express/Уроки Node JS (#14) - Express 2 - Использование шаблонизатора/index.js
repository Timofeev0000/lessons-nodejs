const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/news/:id', function(req, res) {
    const obj = {
        model: 'BMW',
        speed: '278km',
        wheels: 4
    }
    const paragraphs = [
        'Параграф',
        'Обычный текст',
        'Числа: 1, 2, 3',
        99
    ]
    res.render('news', {newsId: req.params.id, object: obj, par: paragraphs})
})

app.listen(3000)