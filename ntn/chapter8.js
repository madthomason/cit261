//Forms
//const form = document.forms['search'];
const form = document.forms.hero;
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


const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault();
    const hero
    {
    }
    ;
    hero.name = form.heroName.value;
    alert(JSON.stringify(hero));
    return hero;
}

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
for (let i = 0; i < form.category.length; i++) {
    if (form.category[i].)
}
//can be done with html checked attribute
form.type[2].value = 'checked';

form.age;
hero.age = form.age.value;
//drop down list
form.city;
hero.city = form.city.value;
form.origin;
hero.origin = form.origin.value;
//button types= [submit, reset, button, menu, ect]
