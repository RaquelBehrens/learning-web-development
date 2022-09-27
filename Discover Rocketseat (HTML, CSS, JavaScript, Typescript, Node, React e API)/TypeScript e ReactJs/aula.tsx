// Tipagem
function showTicket(user: string | null, ticket: number) {
    console.log(`Olá ${user ?? 'Usuário Padrão'}. Seu número do bilhete é ${ticket}.`);
}

showTicket('Raquel', 1)
showTicket(null, 1)


// Tipagem any: 
function sumAny(a: any, b: any) {
    return a+b;
}
sumAny('1', 2)


// Declarado listas
let numbers: number[];
numbers = [1, 2, 3, 4, 5];

let users: Array<string>;
users = ['Fulano', 'Fulana']


// Funções
function showMessages(message: string): void {
    console.log(message);
}

// Union
function printUserId(id: number | string | boolean) {
    console.log(`O ID do usuário é: ${id}`);
}
printUserId('101');
printUserId(101);


/** 
 * Generics
 * S => state
 * T => type
 * K => key
 * V => value 
 * E => element
 */ 

function useState<T extends number | string = string >() {
    let state: T;

    function get() {
        return state
    }

    function set(newValue: T) {
        state = newValue;
    }

    return { get, set };
}

// let newState = useState<string>();
let newState = useState();
newState.get()
newState.set('Raquel')


// Reaproveitar tipos
type IdType = string | number | undefined;

let userId: IdType;
let adminId: IdType;

adminId = 10;

// Type Assertions
type UserResponse = {
    id: number;
    name: string;
    avatar: string;
}

let userResponse = {} as UserResponse;
console.log(userResponse.avatar)


// Objetos
type Point = {
    x: number;
    y: number;
}

function printCoord(points: Point) {
    console.log(`O eixo x é ${points.x}`)
    console.log(`O eixo y é ${points.y}`)
}

printCoord({x: 101, y: 50})


// Opcional
// com ? diz que isAdmin é opcional
type User = {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean;
}

let newUser: User = {
    name: 'Fulana',
    email: 'email@email.com',
    age: 0
}


// Intersecção de tipos
type Usuario = {
    id: number;
    name:string
}

type Char = {
    nickname: string;
    level: number;
}

type PlayerInfo = Usuario & Char;


// Interface
interface User2 {
    id: number;
    name: string
}

let newUser2: User2 = {
    id: 1,
    name: "Fulana"
}

function registerNewUser(newUser2: User2) {
    newUser2.id
}
