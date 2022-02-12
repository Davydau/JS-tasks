// 4 Objects and Functions
// -        Создать объект car, добавить к нему свойство color со значением 'черный'

// -        Изменить свойство color объекта car на 'зеленый'

// -        В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
let car = {
    color: 'чёрный',
    power: 'мощность двигателя',
};
car.color = 'зелёный';
console.log(car);

// -         На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок

function calcSum(apple, pear) {
    if (apple + pear > 1) {
        return apple + pear;
    } else {
        return console.log('такое возможно?');
    }
}

//-        В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в
// терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)

user = {
    name: 'John',
};

function checkName(key) {
    if (user.name === key) {
        return true;
    } else {
        return false;
    }
}

let key = prompt('введите ваше имя', '');

if (checkName(key)) {
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
