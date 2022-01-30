// 4 Objects and Functions
// -        Создать объект car, добавить к нему свойство color со значением 'черный'

// -        Изменить свойство color объекта car на 'зеленый'

// -        В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
let car = {
  colore: "чёрный",
<<<<<<< HEAD
  power: "мощность двигателя", 
=======
  power: "мощность двигателя",
>>>>>>> Arrays-and-Cycles
};
car.colore = "зелёный";
console.log(car);

// -         На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок


function calcSum(apple, pear) {
<<<<<<< HEAD
if (apple + pear > 1) {
  return apple + pear;
} else {
  return console.log('такое возможно?');
}
=======
  if (apple + pear > 1) {
      return apple + pear;
  } else {
      return console.log("такое возможно?");
  }
>>>>>>> Arrays-and-Cycles
}

//-        В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в 
// терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)

user = {
name: "John",
};

function chekName(key) {
<<<<<<< HEAD
if (user.name === key) {
return true;
} else {
  return false;
}
=======
  if (user.name === key) {
      return true;
  } else {
      return false;
  }
>>>>>>> Arrays-and-Cycles
}

let key = prompt("введите ваше имя", "");

<<<<<<< HEAD

if ( chekName(key) ) {
console.log('Привет ' + key);
} else {
console.log('нет такого имени');
=======
if (chekName(key)) {
  console.log("Привет " + key);
} else {
  console.log("нет такого имени");
>>>>>>> Arrays-and-Cycles
}

//-        Напишите функцию вычисления типа аргумента и вывод типа в консоль

<<<<<<< HEAD
function getArgType(arg){
const type = typeof arg;
console.log(type);
=======
function getArgType(arg) {
  const type = typeof arg;
  console.log(type);
>>>>>>> Arrays-and-Cycles
}


//-        Напишите функцию, которая определяет является ли число простым или нет

function showPrime(num, div = 2) {
<<<<<<< HEAD
  
 
  if(num <= div ) return 'составное число'; 
   
  if(num % 2 === 0) return 'составное число'  
  
  return 'простое число'; 
 
=======
  if (num <= div) return "составное число";

  if (num % 2 === 0) return "составное число";

  return "простое число";

>>>>>>> Arrays-and-Cycles
  return showPrime(num);
}