// const events = require('events')

// const myEmit = new events.EventEmitter()

// myEmit.on('some_event', function(text) {
//     console.log(text);
// })

// myEmit.emit('some_event', 'Обработчик событий сработал!')


const events = require('events')
const util = require('util')

const Cars = function(model) {
    this.model = model
}

util.inherits(Cars, events.EventEmitter)

const bmw = new Cars('BMW')

const audi = new Cars('Audi')

const volvo = new Cars('Volvo')

const mercedes = new Cars('Mercedes')

const cars = [bmw, audi, volvo, mercedes]
cars.forEach(function(car) {
    car.on('speed', function(text) {
        console.log(car.model + ' speed is - '+text);
    })
})

bmw.emit('speed', '255 km')