//1
var weight

//2
console.log(typeof weight) //undefined

//3
var name = "Nome"
var age = 20
var stars = 5.1
var isSubscribed = true

//4
let student = {
    name: "Nome",
    age: 20,
    stars: 5.1,
    isSubscribed: true
}

console.log(typeof student) //object

console.log(`${student.name} de idade ${student.age} pesa ${student.stars} kg.`)

//5
let students = []

//6
students = [student]

//7
console.log(students[0])

//8
let student2 = {
    name: "Bla",
    age: 0,
    stars: 89,
    isSubscribed: false
}

students[1] = student2
