// Tipos Básicos
let age: number = 5;
const firstName: string ='Eduardo';
const isValid: boolean = true;

let idk:any = 5; //pode ser qualquer coisa!
idk='12';
idk=true;

const ids: number[] = [1,2,3,4,5,6];
const booleans: boolean[] = [true, false, true, false]
const names: string[] = ['Eduardo', 'Jucilene', 'Leo']

//Tupla Eu posso ter diferentes tipos em uma determinda orden!

const person: [number,string] = [23, 'Eduardo']
const people: [number,string][] = [[23,'Eduardo'],[22,'Jucilene']]//lista de tupla

//Intersections, Uma variavel pode ser um tipo ou mais!

const productId: string | number | boolean = false

//Enum Um valor que sempre vai ser atribuido a outro valor!

enum Direction{
    Up = 1,
    Down = 2,
    Left = 'Esquerda'
}
const direction = Direction.Up

//Type Assertions tratar uma varivael de tipo como se fosse de um tipo diferente

const productName: any = 'Boné';
// let intemId = productName as string
let intemId = <string> productName


console.log(direction);
