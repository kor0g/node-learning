const readline = require('readline')
const { log, getLogs } = require('./log')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const fileName = process.argv[2] || String(new Date().getTime())

const question = (message) => {
    rl.question(message || 'Heads or tails? (enter 0 or 1): ', (data) => {
        if (data !== '0' && data !== '1') {
            question('Enter correct number (0 or 1):')
            return
        }

        const answer = +data
        const number = Math.round(Math.random())
        const isWon = answer === number
        const result = isWon ? 'Right!' : 'Wrong :('

        console.log(result)
        log(fileName, { answer, isWon })

        question()
    })
}

question()

rl.on('close', async () => {
    const logs = await getLogs(fileName)

    if (!logs || !logs.length) return

    const count = logs.length
    const winCount = logs.filter(({ isWon }) => isWon).length
    const lossCount = count - winCount

    const getRatio = (num, from) => Math.round(num * 100 / from)
    const ratio = `${getRatio(winCount, count)}% x ${getRatio(lossCount, count)}%`

    console.table({ count, winCount, lossCount, ratio })
})
