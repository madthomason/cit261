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