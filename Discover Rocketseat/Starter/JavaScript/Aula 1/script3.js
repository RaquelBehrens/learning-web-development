function createPhrases() {
    console("Frase")
}


//função anônima ou function expression
const sum = function(numero1, numero2) {
    let total = numero1 + numero2
    return total
}

let resultado = sum(2, 3)
console.log(resultado)


//arrow function
const sayMyName = (name) => {console.log(name)}

sayMyName("Name")


//função construtora
function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando"
    }
}

const pessoa = new Person("Nome")
const pessoa2 = new Person("Outro nome")
console.log(pessoa)
console.log(pessoa.name)

let name = new String("Nome")
let date = new Date("2020-09-16")