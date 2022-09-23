const { EventEmitter } = require('events')
const ev = new EventEmitter()
const evOnce = new EventEmitter()

ev.on('saySomething', (message) => {
    console.log('Eu ouvi você: ', message)
})

ev.emit('saySomething', "Raquel")
ev.emit('saySomething', "Raquel")


evOnce.once('saySomething', (message) => {
    console.log('Eu ouvi você: ', message)
})

evOnce.emit('saySomething', "Bla")
evOnce.emit('saySomething', "Bla")
evOnce.emit('saySomething', "Bla")
