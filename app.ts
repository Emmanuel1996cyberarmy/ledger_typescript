import { listTemplate } from "./classes/listTemplate.js";
import { invoice } from './classes/invoice.js'
import { payment } from './classes/payment.js'
import { HasFormatter } from './Interfaces/hasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new invoice('Emmanuel', 'Phone Repair', 500);
// docTwo = new payment('Temi', 'Salary', 1200)



// const invOne = new invoice('mario', 'Paint', 400)
// const invTwo = new invoice('Maleek', 'Shipping', 40)

// let invoices: invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })

// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     speed(a: number): number;
// }

// const me: IsPerson = {
//     name: 'Shaun',
//     age: 25,
//     speak(text: string): void {
//         console.log(text);
//     },
//     speed(amount: number): number {
//         console.log('I spent', amount)
//         return amount;

//     }

// }

// const greetPerson = (person: IsPerson) => {
//     console.log('hello', person.name);
// }
// greetPerson(me)





const form = document.querySelector('.new-item-form') as HTMLFormElement;
//ass here refers to type casting
//sole.log(form.children)
//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new listTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end');
})

// //Generics
// const addUID = <T extends { name: string }>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return { ...obj, uid }
// }
// let docOne = addUID({ name: '4', age: '25' });
// console.log(docOne.name)
// //eith interfaces
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T
// }

// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: 'person',
//     data: { name: 'Ninja' }
// }

// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: 'shooping list',
//     data: ['Bread', "Golden morn"]
// }
// console.log(docThree, docFour);
