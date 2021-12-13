const readline = require('readline')
const http = require('http')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Enter city: ', (city) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=${encodeURI(city)}`

  http.get(url, (res) => {
    if (res.statusCode !== 200) return console.log('Error with code: ' + res.statusCode)
    
    let json

    res.on('data', (data) => {
      json = data
    })

    res.on('end', () => {
      try {
        console.log(JSON.parse(json))
      } catch(err) {
        console.error('Json parsing error: ', err)
      }
    })
  }).on('error', (err) => {
    console.error('Error: ', err)
  })

  rl.close()
})
