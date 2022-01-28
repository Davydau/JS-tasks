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
class animal {
    constructor(name) {
        this.move = true;
    }
    moving(move) {
        this.move = true;
        console.log("двигается.");
    }
    dontmoving(move) {
        this.move = false;
        console.log("не двигается.");
    }
}
class Cat extends animal {
    sleep() {
        console.log("спит...");
    }
}
let cat = new Cat();
cat.moving();
cat.dontmoving();
cat.sleep();
