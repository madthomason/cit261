//Constructors

/*Old news
const Dice = function (sides = 6) {
    this.sides = sides;
    this.roll = function () {
        return Math.floor(this.sides * Math.random() + 1)
    }
}*/

class Dice {
    constructor(sides = 6) {
        //     this.sides = sides;
        Object.defineProperty(this, 'sides', {
                get() {
                    return `This dice has ${sides} sides`;
                },
                set(value) {
                    if (value > 0) {
                        sides = value;
                        return sides;
                    } else {
                        throw new Error('The number of sides must be positive');
                    }
                }
            }
        );
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
    constructor(name, color) {
        this.name = name;


    }

    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }

    swims() {
        return `${this.name} paddles in the water.`;
    }

}

class NinjaTurtle extends Turtle {
    constructor(name, color) {
        super(name);
        this.weapon = 'hands';

        let _color = color;
        this.setColor = (color) => {
            if (typeof color === 'string') {
                return _color = color;
            } else {
                throw new Error('Color must be a string');
            }
            this.getColor = () => _color;
        }
    }

    attack() {
        return `Feel the power of my ${this.weapon}!`;
    }
}

const leo = new Turtle('leonardo');

//Prototypal: All classes and constructor functions have a prototype property that returns an object
// Prototype properties are shared by every instance of the Turtle class
Turtle.prototype.weapon = 'Hands';
Turtle.prototype.attack = function () {
    return `Feel the power of my ${this.weapon}!`;
}
const raph = new Turtle('Raphael', 'Red');
raph.name;
raph.sayHi();

//Find prototype by
Turtle.constructor.prototype
const don = new Turtle('Donatello')
leo.weapon = 'Katana Blades';
raph.weapon = 'Sai';
don.weapon = 'Bo Staff';
Turtle.prototype.food = 'Pizza';
Turtle.prototype.eat = function () {
    return 'Mmm, this ${this.food} tastes great!';
}
const mike = new Turtle('Michelangelo');
mike.weapon = 'Nunchakus';

//adding functionality to built in objects
//but should you? https://stackoverflow.com/questions/14034180/why-is-extending-native-objects-a-bad-practice
//instead create your own class and use extends
Number.prototype.isEven = function () {
    return this % 2 === 0;
}
Number.prototype.isOdd = function () {
    return this % 2 === 1;
}
Array.prototype.first = function () {
    return this[0];
}
Array.prototype.last = function () {
    return this[this.length - 1];
}
Array.prototype.delete = function (i) {
    return self.splice(i, 1);
}
const me = {name: 'Madeline'};
me.age = 19;
console.log(Object.getOwnPropertyDescriptor(me, 'name'));
Object.defineProperty(me, 'eyeColor', {value: 'blue', writable: false, enumerable: true});
Object.defineProperty(me, 'yearsToRetirement', {
    get() {
        if (this.age > this.retirementAge) {
            return 0;
        } else {
            return this.retirementAge - this.age;
        }
    }, set(value) {
        this.age = this.retirementAge - value;
        return value;
    }
});
//Object as a Blueprint
const human = {
    arms: 2, legs: 2, walk() {
        console.log('Walking');
    }
}
const lois = Object.create(human);
lois.name = 'Lois Lane';
lois.job = 'Reporter';
const jimmy = Object.create(human, {
    name: {value: 'Jimmy Olsen', enumerable: true},
    job: {value: 'Photographer', enumerable: true}
});
const SuperHuman = Object.create(human);
SuperHuman.change = function () {
    return `${this.realName} enters into the phonebooth and comes out as ${this.name}!`;
}
SuperHuman.name = 'name Needed';
SuperHuman.realName = 'realName Needed';
const superman = Object.create(SuperHuman);
superman.name = 'Superman';
superman.realName = 'Clark Kent';
console.log(superman.change());
SuperHuman.init = function (name, realName) {
    this.name = name;
    this.realName = realName;
    this.init = undefined; // this line removes the init function, so it can only be called once
    return this;
}

const batman = Object.create(SuperHuman);
batman.init('Batman', 'Bruce Wayne');
console.log(batman.change());
const aquaman = Object.create(SuperHuman).init('Aquaman', 'Arthur Curry');
console.log(aquaman.change());

//mixins
function mixin(target, ...objects) {
    for (const object of objects) {
        if (typeof object === 'object') {
            for (const key of Object.keys(object)) {
                if (typeof object[key] === 'object') {
                    target[key] = Array.isArray(object[key]) ? [] : {};
                    mixin(target[key], object[key]);
                } else {
                    Object.assign(target, object);
                }
            }
        }
    }
    return target;
}

const wonderwoman = Object.create(SuperHuman).init('WonderWoman', 'Dianna Prince');

function copy(target) {
    const object = Object.create(Object.getPrototypeOf(target));
    mixin(object, target);
    return object;
}

function copy(target) {
    const object = Object.create(Object.getPrototypeOf(target));
    mixin(object, target);
    return object;
}

const flight = {
    fly() {
        console.log(`Up, up and away! ${this.name} soars through the  air!`);
        return this;
    }
}
const superSpeed = {
    move() {
        console.log(`${this.name} can move faster than a speeding bullet!`);
        return this;
    }
}
const xRayVision = {
    xray() {
        console.log(`${this.name} can see right through you!`);
        return this;
    }
}
mixin(superman, flight, superSpeed, xRayVision);
mixin(wonderwoman, flight, superSpeed);
console.log(wonderwoman.fly());
//const flash = createSuperHuman({name: 'Flash', realName: 'Barry Allen'}, superSpeed);
//Chaining Functions
console.log(superman.fly().move().xray());
//binding this
superman.friends = [batman, wonderwoman, aquaman]
superman.findFriends = function () {
    const that = this; // or end with .bind(this);, use for of instead of forEach, or =>
    this.friends.forEach(function (friend) {
        console.log(`${friend.name} is friends with ${that.name}`);
    });
}
//borrowing the banana instead of the whole gorilla
