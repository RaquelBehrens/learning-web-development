//Exercício 1

let score = 72

function getNota(score) {
    let nota;

    if(score >= 90) {
        nota = 'A';
    } else if (score >= 80) {
        nota = 'B';
    } else if (score >= 70) {
        nota = 'C';
    } else if (score >= 60) {
        nota = 'D';
    } else if (score >= 0) {
        nota = 'F';
    } else {
        nota = "Nota inválida"
    }

    return nota
}

console.log(getNota(score))


//Exercício 2

function sumArray(array) {
    let total = 0;
    for(let item of array) {
        total += item
    }
    return total
}


function calulateFinalIncome(income) {
    receitaTotal = sumArray(income.receitas)
    despesaTotal = sumArray(income.despesas)
    const total = receitaTotal - despesaTotal
    
    if (total >= 0) {
        return 'O saldo foi positivo.'
    } else {
        return 'O saldo foi negativo.'
    }
}



let objeto = {
    receitas: [2500, 6000, 1500, 1200, 900],
    despesas: [6000, 450, 600, 1500, 3000, 551]
}

console.log(calulateFinalIncome(objeto))


//Exercício 3

function converter(valor) {
    const celsiusExists = valor.toUpperCase().includes('C')
    const fahrenheitExists = valor.toUpperCase().includes('F')

    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    updatedDegree = Number(valor.toUpperCase().replace("F", ""))
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    if (celsiusExists) {
        updatedDegree = Number(valor.toUpperCase().replace("C", ""))
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(converter('10C'))
    console.log(converter('50F'))
} catch (error) {
    console.log(error.message)
}


//Exercício 4

const booksByCategory = [
    {
        category: "Riqueza",
        books: [

            {
                title: "Título 1",
                author: "Autor 1"
            },
            {
                title: "Título 2",
                author: "Autor 2"
            },
            {
                title: "Título 3",
                author: "Autor 3"
            },

        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Título 4",
                author: "Autor 4"
            },
            {
                title: "Título 5",
                author: "Autor 5"
            },
            {
                title: "Título 6",
                author: "Autor 6 e Autor 7"
            },
        ]
    }
]

function count(booksByCategory) {
    let numberOfCategories = 0;
    let numberOfBooksInCategory = []
    let authors;

    for (let category in booksByCategory) {
        for (let book in category.books) {
            authors = (book.author.split(' e ')).length()
            numberOfBooksInCategory++;

            console.log(`The book ${book.title} has ${authors}`)

            if (book.author.toLowerCase().includes("Augusto Cury")) {
                console.log(book)
            }
            
        }
        console.log(`In the ${category.category} category there are ${numberOfBooksInCategory} books.`)
        numberOfCategories++;
    }
    console.log(`There are ${numberOfCategories} categories.`)
}

count(booksByCategory)