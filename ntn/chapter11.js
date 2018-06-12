'use strict';

/*function square(n) {
    return n * n;
} Step aside for cached function*/
function square(x) {
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x * x;
    }
    return square.cache[x]
}


function sayHello(greeting = 'Hello') {
    document.getElementById('display').innerHTML += `${ greeting }, my name is ${ this.name } <br />`;
}

const clark = {name: 'Clark'};
const bruce = {name: 'Bruce'};

//IIFE -self contained
(function () {
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(), today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
})();

//Redefine and Write Themselves
//  Causes properties to be lost when redefined
function party() {
    console.log('Wow this is amazing!');
    party = function () {
        console.log('Been there, got the T-Shirt');
    }
}

//Recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function collatz(n, sequence = [n]) {
    if (n === 1) {
        return `Sequence took ${sequence.length} steps. It was ➥ ${sequence}`;
    }
    if (n % 2 === 0) {
        n = n / 2;
    } else {
        n = 3 * n + 1;
    }
    return collatz(n, [...sequence, n]);
}

//Callbacks
function wait(message, callback, seconds) {
    setTimeout(callback, seconds * 1000);
    console.log(message);
}

function selfDestruct() {
    console.log('BOOOOM!');
}

wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ...?');

//promise
/*const promise = new Promise((resolve, reject) => {
    // initialization code goes here if (success)
    {
        resolve(value);
    }
else
    {
        reject(error);
    }
});*/

const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
console.log('Before the roll');
const dicePromise = new Promise((resolve, reject) => {
    const n = dice.roll();
    setTimeout(() => {
        if (n > 1) {
            setTimeout(() => {
                resolve(n)
            }, n * 200);
        } else {
            setTimeout(() => reject(n), n * 200);
        }
    });
})
dicePromise.then(result => console.log(`I rolled a ${result}`))
    .catch(result => console.log(`Drat! ... I rolled a ${result}`));
console.log('After the roll');

//Async and await
async function loadGame(userName) {
    try {
        const user = await login(userName);
        const info = await getPlayerInfo(user.id); // load the game using the returned info
    }
    catch
        (error) {
        throw error;
    }

}

/*
* function random(a,b=1) { // if only 1 argument is provided, we need to swap the ➥ values of a and b
* if (b === 1) { [a,b] = [b,a]; }
* return Math.floor((b-a+1) * Math.random()) + a;
* }*/

//refactored:
function random(a, b, callback) {
    if (b === undefined) b = a, a = 1; // if only one argument is supplied, assume the lower limit is 1
    const result = Math.floor((b - a + 1) * Math.random()) + a;
    if (callback) {
        result = callback(result);
    }
    return result;
}

//function returning functions
function greeter(greeting = 'Hello') {
    return function () {
        console.log(greeting);
    }
}

const englishGreeter = greeter();
englishGreeter();
const frenchGreeter = greeter('Bonjour');
frenchGreeter();

const germanGreeter = greeter('Guten Tag');
germanGreeter();

//Generators
function* fibonacci(a, b) {
    let [prev, current] = [a, b];
    while (true) {
        [prev, current] = [current, prev + current];
        yield current;
    }
}

const sequence = fibonacci(1, 1);
for (n of sequence)
    console.log(sequence.next());

//pure functions: at lease 1 argument and return value.
let number = 42;
let result = 0;

function impureAdd(x) {
    result = number + x;
}

impureAdd(10);
result;
console.log(result);

//pure: Becomes a building block
// It doesn’t rely on values from somewhere else in the program,
// returns new values, rather than altering any of the underlying data.
const number = 42;

function pureAdd(x, y) {
    return x + y;
}

result = pureAdd(number, 10);
console.log(result);

function sum(array, callback) {
    if (callback) {
        array = array.map(callback);
    }
    return array.reduce((a, b) => a + b);
}

function mean(array) {
    return sum(array) / array.length;
}

function variance(array) {
    return sum(array, square) / array.length - square(mean(array))
}

//Higher-Order: accepts another function as an argument, returns another function as a result, or both
//Currying
function multiplier(x, y) {
    if (y === undefined) {
        return function (z) {
            return x * z;
        }
    } else {
        return x * y;
    }
}
//general
function curry(func, ...oldArgs) {
    return function (...newArgs) {
        const allArgs = [...oldArgs, ...newArgs];
        return func(...allArgs);
    }
}

