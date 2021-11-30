const readline = require('readline')

const input = readline.createInterface(process.stdin)

console.log('Загадано число в диапазоне от 0 до 100')

const number = Math.floor(Math.random() * 100)

input.on('line', (data) => {
    const isCorrectNumber = +data >= 0 && +data <= 100

    if (!isCorrectNumber) {
        console.log('Введите число от 0 до 100')
    }

    if (+data < number) {
        console.log('Больше')
    }

    if (+data > number) {
        console.log('Меньше')
    }

    if (+data === number) {
        console.log(`Отгадано число ${number}`)
        input.close()
    }
})
