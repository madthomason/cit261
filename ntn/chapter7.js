//Events
function doSomething(event) {
    if (event.shiftKey) {
        console.log('a Shifty move there!')
    }
    else if (event.ctrlKey && event.key === 'c'){
        console.log('Action cancelled');
    }
    else if (event.metaKey) {
        console.log('you must have a mac!');
    }
    //console.log(event.type);
    //console.log(event.target);
}

function highlight(event) {
    event.target.classList.toggle('highlighted');
}

const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click', () => console.log('click'));
clickParagraph.addEventListener('mousedown', () => console.log('down'));
clickParagraph.addEventListener('mouseup', () => console.log('up'));

const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
mouseParagraph.addEventListener('mousemove', () => console.log('you moved!'));

//addEventListener('keydown', highlight);

//addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));

//To show the ctrl, shift, ect. you have to use keydown not press
//shiftKey, ctrlKey, altKey, and metaKey are all properties of the event object
// addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));
addEventListener('keydown', doSomething);

//TOUCH EVENTS
addEventListener('touchend', () => console.log('touchend'));

addEventListener('touchmove', () => console.log('touchmove'));

//swipe is a combo of touchstart, touchmove, and touchend