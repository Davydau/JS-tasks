// 4 Objects and Functions
// -        Создать объект car, добавить к нему свойство color со значением 'черный'

// -        Изменить свойство color объекта car на 'зеленый'

// -        В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
let car = {
    color: 'чёрный',
};
car.color = 'зелёный';
car.power = function ShowPower() {
    console.log('мощность двигателя');
};
car.power();
console.log(car.color);

// -         На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок

function calcSum(apple, pear) {
    return apple + pear;
}

//-        В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в
// терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)

user = {
    name: 'John',
};

function checkName(key) {
    key = prompt('введите ваше имя', 'John');
    if (user.name === key) {
        console.log('Привет ' + key);
    } else {
        console.log('нет такого имени');
    }
}
checkName();

//-        Напишите функцию вычисления типа аргумента и вывод типа в консоль

function getArgType(valueToCheckType) {
    const type = typeof valueToCheckType;
    console.log(type);
}

//-        Напишите функцию, которая определяет является ли число простым или нет

function checkPrime(num) {
    for (let j = 2; j < num; j++) {
        if (num % j == 0) {
            return 'число составное';
        }
    }
    return 'число простое';
}
