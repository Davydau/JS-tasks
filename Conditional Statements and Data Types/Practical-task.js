//3 Conditional Statements and Data Types
// 3.1 Выполнить сложение различных типов(string+boolean, string+number, number+boolean)

const stringBoolean1 = 'dima' + true;
console.log(stringBoolean1);

const stringNumber1 = 'dima' + 100;
console.log(stringNumber1);

const numberBoolean1 = 100 + true;
console.log(numberBoolean1);

// 3.2. Выполнить умножение различных типов(string * boolean, string * number, number * boolean)

const stringBoolean2 = 'dima' * true;
console.log(stringBoolean2);

const stringNomber2 = 'dima' * 2;
console.log(stringNomber2);

const numberBoolean2 = 2 * true;
console.log(numberBoolean2);

// 3.3 Выполнить деление различных типов(string/boolean, string/number, number/Boolean)

const stringBoolean2olean3 = 'dima' / true;
console.log(stringBoolean2olean3);

const stringNomber3 = 'dima' / 2;
console.log(stringNomber3);

const numberBoolean3 = 2 / true;
console.log(numberBoolean3);

//3.4 Выполнить явное преобразование(number, string, boolean)

let str = "123";
let num = Number(str); 
console.log(typeof num); 


let value = true;
value = String(value);
console.log(typeof value);


let bool = (Boolean("Hi"));
console.log(bool);

let bool1 = (Boolean(""));
console.log(bool1);

let bool2 = (Boolean("0"));
console.log(bool2);