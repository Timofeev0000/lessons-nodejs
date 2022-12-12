// Первый способ экспорта
// const array_counter = function(array) {
//     return 'В массиве, находится, '+array.length+' элементов'
// }

// const multiply = function(x, y) {
//     return `${x} умножить ${y} ровно ${x * y}`
// }

// const some_value = 451

// module.exports.array_counter = array_counter
// module.exports.multiply = multiply
// module.exports.some_value = some_value


// Второй способ экспорта
// module.exports.array_counter = function(array) {
//     return 'В массиве, находится, '+array.length+' элементов'
// }

// module.exports.multiply = function(x, y) {
//     return `${x} умножить ${y} ровно ${x * y}`
// }

// module.exports.some_value = 451


// Третьий способ экспорта
// const array_counter = function(array) {
//     return 'В массиве, находится, '+array.length+' элементов'
// }

// const multiply = function(x, y) {
//     return `${x} умножить ${y} ровно ${x * y}`
// }

// const some_value = 451

// module.exports = {
//     array_counter: array_counter,
//     multiply: multiply,
//     some_value: some_value
// }