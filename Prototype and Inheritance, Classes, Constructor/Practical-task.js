// 6 Prototype and Inheritance, Classes, Constructor
// Создать 2 объекта: animal и cat, в объект animal добавить свойство move, объект cat должен наследовать свойство move,
//  реализовать и через прототипы и через классы.
let animal = {
    move: true
 };

 let cat = {
   
 };

 cat.__proto__ = animal;

 alert(cat.move);
