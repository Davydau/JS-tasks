// 5 Arrays and Cycles
// 5.1 Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма

['криминальное чтиво', 'омерзительная восьмёрка', 'бойцовский клуб'].forEach(console.log);
// 5.2 Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив

let arr = ['ford', 'mazda', 'honda'];
let str = arr.join('; ');
console.log(str);
let arr1 = str.split('; ');
console.log(arr1);
// 5.3 Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello

let arr = ['dima', 'dasha', 'lena', 'denis'];
let newArr = arr.map(function (N) {
    return N + ' hello';
});
console.log(newArr);

// 5.4 Преобразовать числовой массив в Boolean

let arr = [1, 2, 0, 4].map(Boolean);
console.log(arr);
// 5.5 Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию

function compareNumeric(a, b) {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
}

let arr = [1, 6, 7, 8, 3, 4, 5, 6];

arr.sort(compareNumeric);

console.log(arr);

// 5.6 Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3

function isBig(numb) {
    return numb > 3;
}

let filtered = [1, 6, 7, 8, 3, 4, 5, 6].filter(isBig);
console.log(filtered);
// 5.7 Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу

function getElementIndex(array, element) {
    return array.indexOf(element);
}
// 5.8 Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10

function showNum(a) {
    while (a >= 10) {
        console.log(a);
        a--;
    }
}

// 5.9 Реализовать цикл, который выводит в консоль простые числа

function showCyclePrimeNum(num) {
    Prime: for (i = 1; i <= num; i++) {
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                continue Prime;
            }
        }
        console.log(i);
    }
}

showCyclePrimeNum();
// 5.10 Реализовать цикл, который выводит в консоль нечетные числа

function showCycleOddNum(num) {
    C: for (i = 1; i <= num; i++) {
        let j = 2;
        if (i % j == 0) {
            continue C;
        } else {
            console.log(i);
        }
    }
}

showCycleOddNum();
