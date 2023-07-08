"use strict";
// Tipos Básicos
let age = 5;
const firstName = 'Eduardo';
const isValid = true;
let idk = 5; //pode ser qualquer coisa!
idk = '12';
idk = true;
const ids = [1, 2, 3, 4, 5, 6];
const booleans = [true, false, true, false];
const names = ['Eduardo', 'Jucilene', 'Leo'];
//Tupla Eu posso ter diferentes tipos em uma determinda orden!
const person = [23, 'Eduardo'];
const people = [[23, 'Eduardo'], [22, 'Jucilene']]; //lista de tupla
//Intersections, Uma variavel pode ser um tipo ou mais!
const productId = false;
//Enum Um valor que sempre vai ser atribuido a outro valor!
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
console.log(direction);
