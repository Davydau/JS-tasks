// 6 Prototype and Inheritance, Classes, Constructor
// Создать 2 объекта: animal и cat, в объект animal добавить свойство move, объект cat должен наследовать свойство move,
//  реализовать и через прототипы и через классы.
// 6.1

let animal = {
    move: true,
};

let cat = {};

cat.__proto__ = animal;

console.log(cat.move);

//6.2
class Animal {
    constructor() {
        this.move = true;
    }
    moving() {
        this.move = true;
        console.log('двигается.');
    }
    dontmoving() {
        this.move = false;
        console.log('не двигается.');
    }
}
class Cat extends Animal {
    sleep() {
        console.log('спит...');
    }
}
let cat = new Cat();
cat.moving();
cat.dontmoving();
cat.sleep();
