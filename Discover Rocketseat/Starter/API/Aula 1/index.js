const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')


//middleware
//app.use(express.json())

//body params
//app.route('/').post( (req, res) => {
//    const {nome, cidade} = req.body
//    res.send(req.body)
//})

//route params
//app.route('/').get( (req, res) => res.send( "oi" ))
//app.route('/:nome').get( (req, res) => res.send(req.params.nome))
//app.route('/identidade/:nome').get( (req, res) => res.send(req.params.nome))

//query params
//app.route('/').get( (req, res) => res.send( req.query.nome ))
//app.route('/about/user').get( (req, res) => res.send( req.query ))

//axios
app.route('/').get( (req, res) => {
    axios.get('https://api.github.com/users/raquelbehrens')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error))
})
