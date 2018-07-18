<<<<<<< HEAD
//Forms
/*const form = document.forms['search'];

const input = form['searchInput'];

input.value = 'search here';
//long version to html markup placeholder
input.addEventListener('focus', function () {
    if (input.value === 'search here') {
        input.value = '';
    }
}, false);
input.addEventListener('blur', function () {
    if (input.value === '') {
        input.value = 'search here';
    }
}, false);


//input.addEventListener('focus', () => alert('focused'), false);
//input.addEventListener('blur', () => alert('blurred'), false);
//input.addEventListener('change', () => alert('changed'), false);

form.action = 'a/fake.url';
form.addEventListener('submit', search, false);


function search(event) {
    alert(`you searched for: ${input.value}`);
    event.preventDefault();
}
*/

const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault();
    const hero =
        {};
    hero.name = form.heroName.value;
//checkboxes
    form.powers;
    hero.powers = [];
    for (let i = 0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }
//radio buttons
    form.category;
    hero.category = form.category.value;

    form.age;
    hero.age = form.age.value;
//drop down list
    form.city;
    hero.city = form.city.value;
    form.origin;
    hero.origin = form.origin.value;
//button types= [submit, reset, button, menu, ect]
    alert(JSON.stringify(hero));
    return hero;
}

//form validation
const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start ➥ with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if (heroName.startsWith('X')) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}

form.heroName.addEventListener('keyup',disableSubmit,false);


function disableSubmit(event) {
    if (event.target.value === '') {
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

=======
'use strict';
//console.trace();
//const error = new Error();
//error.name ->.stack -> .message
// EvalError, RangeError,  ReferenceError, SyntaxError, TypeError, URIError, InternalError
//throw error;


function squareRoot(number) {

    if (number < 0) {
        throw new RangeError('You cant find the square root of  negative numbers ')
    }
    return Math.sqrt(number);
}


function imaginarySquareRoot(number) {
    'use strict';
    let answer;
    try {
        answer = String(squareRoot(number));
    } catch (error) {
        answer = squareRoot(-number) + "i";
    } finally {
        return `+ or - ${answer}`;
    }
}

/*
1. Write tests (that initially fail)
2. Write code to pass the tests
3. Refactor the code
4. Test refactored code
3. JavaScript: Novice to Ninja, 2nd Edition
5. Write more tests for new feature
Jest -TDD framework*/

/* old
function factorsOf(n) {
    const factors = [];
    // for (let i = 1; i < n; i++) {
    for (let i = 1; i <= n; i++) {
        if (n / i === Math.floor(n / i)) {
            factors.push(i);
        }
    }
    return factors;
}
*/

function factorsOf(n) {
    if (Number.isNaN(Number(n))) {
        throw new RangeError('Argument Error: Value must be an integer');
    }
    if (n < 0) {
        throw new RangeError('Argument Error: Number must be positive');
    }
    if (!Number.isInteger(n)) {
        throw new RangeError('Argument Error: Number must be an integer');
        const factors = [];
        for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
            if (n % i === 0) {
                factors.push(i, n / i);
            }
        }
        return factors.sort((a, b) => a - b);
    }
}

function isPrime(n) {
    try {
        return factorsOf(n).length === 2;
    } catch (error) {
        return false;
    }
}

/*
test('factors of 12', () => {
    expect(factorsOf(12)).toEqual([1, 2, 3, 4, 6, 12]);
})
it('should throw an exception for non-numerical data', () => {
    expect(factorsOf('twelve')).toThrow();
});
it('should throw an exception for negative numbers', () => {
    expect(() => factorsOf(-2)).toThrow();
});
it('should throw an exception for non-integer numbers', () => {
    expect(() => factorsOf(3.14159)).toThrow();
});*/
>>>>>>> master
