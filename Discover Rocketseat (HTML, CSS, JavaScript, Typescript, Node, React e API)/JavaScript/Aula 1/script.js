// Comentário
/* Comentário em bloco */

//Tipos de dados
console.log(`Alo ${1+1}`)
console.log(undefined) //indefinido
console.log(null) //objeto que não possui nada dentro != indefinido
console.log(null !== undefined)
console.log({
    nome: "Nome",
    idade: 10,
    andar: function () {
        console.log('andar')
    }
})

//Variáveis
//var é global e também local, algo pode ser declarado depois de ser chamado em outro escopo mas fica como undefined
var clima = "Quente" 

//let é local: só funciona no escopo em que foi criada
//precisa declarar antes de ser chamado no escopo
let algo = "Algo"

//constante, não muda, e é local: só funciona no escopo onde foi criada
const algo2 = "Não altera"

//let algo3: String //variável fortemente tipada
clima = 0
console.log(typeof clima)

console.log('clima: '+ clima + ' algo: ' + algo)

//Objetos
const person = {
    name: "Nome",
    age: 30,
    weight: 50,
    isAdmin: true
}

console.log(person.name)