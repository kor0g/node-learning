const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const options = {
    year: {
        alias: 'y',
        describe: 'get current year',
    },
    month: {
        alias: 'm',
        describe: 'get current month',
    },
    date: {
        alias: 'd',
        describe: 'get date in calendar month',
    },
    day: {
        alias: 'd',
        describe: ''
    },
}

const calculateDate = (date, type, number) => {
    const calculate = {
        day: () => date.setDate(date.getDate() + number),
        month: () => date.setMonth(date.getMonth() + number)
    }

    calculate[type]?.()

    return date
}

yargs(hideBin(process.argv))
    .command(
        'current', 'get current date ISO',
        (yargs) => yargs.options({
            year: options.year,
            month: options.month,
            date: options.date,
        }),
        (argv) => {
            if (argv.month) {
                console.log(new Date().toLocaleString('default', { month: 'long' }))
            }
            if (argv.year) {
                console.log(new Date().getFullYear())
            }
            if (argv.date) {
                console.log(new Date().toISOString().split('T')[0])
            }
            if (!argv.month && !argv.year && !argv.date) {
                console.log(new Date().toISOString())
            }

        },
    )
    .command(
        'add', 'add date',
        (yargs) => yargs.options({
            month: options.month,
            day: options.day,
        }),
        (argv) => {
            if (argv.day) {
                console.log(calculateDate(new Date(), 'day', argv.day))
            }
            if (argv.month) {
                console.log(calculateDate(new Date(), 'month', argv.month))
            }
        }
    )
    .command(
        'sub', 'subtract date',
        (yargs) => yargs.options({
            month: options.month,
            day: options.day,
        }),
        (argv) => {
            if (argv.day) {
                console.log(calculateDate(new Date(), 'day', -argv.day))
            }
            if (argv.month) {
                console.log(calculateDate(new Date(), 'month', -argv.month))
            }
        }
    )
    .help()
    .argv
