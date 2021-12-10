const fs = require('fs')
const { readFile } = require('fs/promises')
const path = require('path')

const logsDir = path.resolve('logs')

const log = (fileName, object) => {
    fs.stat(logsDir, (err) => {
        if (err) fs.mkdir(logsDir, (mkdirErr) => {
            if (mkdirErr) console.log(mkdirErr)
        })

        const filePath = path.join(logsDir, fileName)

        fs.appendFile(`${filePath}.log`, JSON.stringify(object) + '\n', (writingError) => {
            if (writingError) console.log(writingError)
        })
    })
}

const getLogs = async (fileName) => {
    const filePath = path.join(logsDir, fileName)

    try {
        const data = await readFile(`${filePath}.log`, 'utf-8')
        const jsonLines = data.split(/\r?\n/)

        return jsonLines.map(el => {
            try {
                return JSON.parse(el)
            } catch (err) {
                return
            }
        }).filter(Boolean)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    log,
    getLogs
}