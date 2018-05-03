//Objects

function tryObject() {
    const superman = {
        name: 'Superman',
        'real name': 'Clark Kent',
        height: 75,
        weight: 235,
        hero: true,
        villain: false,
        allies: ['Batman', 'Supergirl', 'Superboy'],
        fly() {
            return 'Up, up and away!';
        }
    };

    var name = superman.name;
//console.log(name);

//console.log(superman.hasOwnProperty('name'));

    var bool = 'city' in superman;
//console.log(bool);

//or Objects.key(superman) returns an array of the keys
    // and .values the array of values.
    // .entries a key-values pair array

    // for (const key in superman) {
    for (const [key, value] of Object.entries(superman)) {
        //if(superman.hasOwnProperty(key)) {
        //  console.log(key + ": " + superman[key])
        console.log(`${key}: ${value}`);
    }//}

    const dice = {
        sides: 26,
        roll: function() {
            return Math.floor(this.sides * Math.random()) + 1; // Not working as the book says it should.
        },
    }
    console.log('roll = ' + dice.roll());
}

function nestedObjects() {
    const jla = {
        superman: {realName: 'Clark Kent', 'catch phrase': 'up, up, and away!',},
        batman: {realName: 'Bruce Wayne', 'catch phrase': 'to the Batmobile!',},
        wonderWoman: {realName: 'Diana Prince', 'catch phrase': 'merciful Minerva!',},
        flash: {realName: 'Barry Allen', 'catch phrase': 'I am the fastest man alive',},
        aquaman: {realName: 'Arthur Curry', 'catch phrase': 'By the beard of Posideon!',},
        catchPhrase({name, catchPhrase,}) {
            return `${catchPhrase} -${name}`;
        }
    }

    console.log(jla.catchPhrase({name: jla.superman.realName, catchPhrase: jla.superman['catch phrase']}));
}

function builtIn() {
    const wonderWoman = {
        name: 'Wonder Woman',
        'real name': 'Diana Prince',
        height: 72.23,
        weight: 165,
        hero: true,
        villain: false,
        updates: null,
        allies: ['Wonder Girl', 'Donna Troy', 'Superman'],
        lasso: function () {
            console.log('You will tell the truth!');
        }
    }

    //Math https://www.w3schools.com/js/js_math.asp
    console.log('height before:' + wonderWoman.height);
    wonderWoman.height = Math.round(wonderWoman.height);
    console.log('height after:' + wonderWoman.height);
    //Date
    var timeStamp = new Date();
    wonderWoman.updates = timeStamp.toLocaleTimeString();

    //JSON parse() and stringify()
    var wwString = JSON.stringify(wonderWoman);
    console.log(wwString);

    //RegExp by /[a-zA-Z]+ing$/; ||
    const pattern = new RegExp('[a-zA-Z]+ing$');

    //test regex at regextester.com
    //https://www.w3schools.com/jsref/jsref_obj_regexp.asp 


}