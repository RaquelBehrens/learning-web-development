const express = require('express')

const app = express()
app.listen('3000')

//GET
app.route('/').get( (req, res) => res.send( "oi" ))
app.route('/sobre').get( (req, res) => res.send( "oi sobre" ))

//POST 
app.route('/').post( (req, res) => res.send(req.body))

//PUT
app.route('/').put( (req, res) => {
    author = req.body.author
    res.send(author)
})

//DELETE
app.route('/:identificador').delete( (req, res) => {
    res.send(req.params.identificador)
})