// // const character = 'Mario';
// // console.log(character);

// // const inputs = document.querySelectorAll('input');
// // console.log(inputs);

// // inputs.forEach(input => {
// //     console.log(input)
// // })

// // const circ = (diameter: number) => {
// //     return diameter * Math.PI;
// // }
// // console.log(circ(7.5))

// // arrays
// // let names = ['Luigi', 'Yoshi', 'Mario'];
// // names.push('Emm')//correct
// // //names.push(1) wrong type

// // let mixed = ['ay', 1, 'ma', 6, 78, true];
// // mixed.push(9)//correct
// // mixed.push('yuri');//correct this is because the declaration includes all those types.

// // let ay = {
// //     name: 'Ayo',
// //     belt: 'black',
// //     age: 30
// // }
// // ay.name = 'Chris'
// // console.log(ay)

// let ninjas: string[] = []//this is how to declare an empty array
// //union types
// let mixed: (string | number | boolean)[] = []
// mixed.push(10, 'hey', true)
// console.log(mixed)

// let uid: string | number //when u are using a union type that is not in front of an array we dont have to use parenthesis
// uid = 1//fine
// uid = 'holla'
// //uid = false;//wrong/

// let ninja1: object;
// ninja1 = { name: 'Yoki', age: 45 };
// //explicitly define objects type
// let ninja2: {
//     name: string,
//     age: number,
//     beltColor: string
// }

// ninja2 = { name: 'maria', age: 21, beltColor: 'black' }

//type any
// let age: any = 23;
// age = 'Hey';
// console.log(age) //hey

// let another: any[] = []
// another.push(1)
// another.push(2, 'three', 'four', true)
// console.log(another)
// const add = (a: number, b: number, c?: number | string) => {
//     return (a + b)
// }
// console.log(add(15, 15, 'one'))

// type objWithName = { name: string, uid: string | number }

// const greet = (user: objWithName) => {

//}
//function signature
//example 1 this function does not return anything
let greet: (a: string, b: string) => void

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);

}
//example 2 this function returns a number
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo
    }
}
//example 3
let logDetails: (obj: { name: string, age: number }) => void;
type person = { name: string, age: number }
logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}