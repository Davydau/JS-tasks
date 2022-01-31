// 4 Objects and Functions
// -        Создать объект car, добавить к нему свойство color со значением 'черный'

// -        Изменить свойство color объекта car на 'зеленый'

// -        В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
let car = {
    color: 'чёрный',
};
car.color = 'зелёный';
car.power = function () {
    console.log('мощность двигателя');
};
car.power();
console.log(car.color);

// -         На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок

function calcSum(apple, pear) {
    return apple + pear;
}

function calcSum(apple, pear) {
    if (apple + pear > 1) {
        return apple + pear;
    } else {
        return confirm('такое возможно?');
    }
}

let apple = prompt('Сколько яблок привезли?', 1);
let pear = prompt('Сколько груш привезли?', 1);

if (calcSum(apple, pear)) {
    console.log(+apple + +pear);
} else {
    console.log('такое возможно?');
}

//-        В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в
// терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)

user = {
    name: 'John',
};

function chekName(key) {
    if (user.name === key) {
        return true;
    } else {
        return false;
    }
}

let key = prompt('введите ваше имя', '');

if (chekName(key)) {
    console.log('Привет ' + key);
} else {
    console.log('нет такого имени');
}

//-        Напишите функцию вычисления типа аргумента и вывод типа в консоль

function getArgType(arg) {
    const type = typeof arg;
    console.log(type);
}

//-        Напишите функцию, которая определяет является ли число простым или нет

function showPrime(num, div = 2) {
    if (num <= div) return 'составное число';

    if (num % 2 === 0) return 'составное число';

    return 'простое число';

    return showPrime(num);
}
