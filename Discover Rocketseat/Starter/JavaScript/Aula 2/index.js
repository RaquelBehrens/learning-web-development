setTimeout(function () {
    console.log('Depois de um segundo')
}, 1000)

const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'
https.get(API, res => {
    console.log(res.statusCode)
})
console.log('Conectando API')