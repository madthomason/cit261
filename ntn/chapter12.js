//Constructors

const dice = {
    sides: 6, roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

const Dice = function (sides = 6) {
    this.sides = sides;
    this.roll = function () {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

class Dice {
    constructor(sides = 6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }

    //Static means that it is called by the class directly rather than by instances of the class
    static description() {
        return 'a way of choosing random numbers';
    }
}

const redDice = new Dice(4);
const greenDice = new redDice.constructor(24);

class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }

    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }

    attack() {
        return `Feel the power of my ${this.weapon}!`;
    }
}

const leo = new Turtle('leonardo');

//Prototypal: All classes and constructor functions have a prototype property that returns an object:
Turtle.prototype.weapon = 'Hands';
Turtle.prototype.attack = function () {
    return `Feel the power of my ${this.weapon}!`;
}
const raph = new Turtle('Raphael');
raph.name;
raph.sayHi();
raph.weapon;
raph.attack();
//Find prototype by
Turtle.constructor.prototype

