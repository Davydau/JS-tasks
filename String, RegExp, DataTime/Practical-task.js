// 7.1 Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение,
// которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'

let str = 'ahb acb aeb aeeb adcb axeb';
let result = str.match(/a.b/g);
console.log(result);
// 7.2 Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные

let str = "2+3 223 2223'";
let result = str.match(/2\+3/g);
console.log(result);
// 7.3 Получить день, месяц и год текущей даты и по отдельности вывести в консоль

let date = new Date();

console.log(date.getDate());

console.log(date.getMonth());

console.log(date.getFullYear());
