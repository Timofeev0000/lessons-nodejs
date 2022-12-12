const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs')

app.use('/public', express.static('public')) // Промежуточное ПО для подключение статических файлов

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/about', function(req, res) {
    res.render('about')
})

app.get('/login', function(req, res) {
    res.render('login')
})

app.post('/login', urlencodedParser, function(req, res) {
    if (!req.body) return res.sendStatus(400)
    console.log(req.body)
    res.render('about-success', {data: req.body})
    
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