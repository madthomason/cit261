//Events
function doSomething(event) {
    if (event.shiftKey) {
        console.log('a Shifty move there!')
    }
    else if (event.ctrlKey && event.key === 'c') {
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
//addEventListener('keydown', doSomething); Annoying after a while

//TOUCH EVENTS
addEventListener('touchend', () => console.log('touchend'));

addEventListener('touchmove', () => console.log('touchmove'));

//swipe is a combo of touchstart, touchmove, and touchend
//event.touches[2 (number of touch points or fingers)]  touch.screenX and .screenY returns coordinates

ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');
//capturing
ulElement.addEventListener('click', (event) => console.log('Clicked on ul'), true);
liElement.addEventListener('click', (event) => console.log('Clicked on li'), true);
//bubbling
ulElement.addEventListener('click', (event) => console.log('Clicked on ul'), false);
liElement.addEventListener('click', (event) => console.log('Clicked on li'), false);

//stop bubbling
ulElement.addEventListener('click', (event) => { console.log('Clicked on ul');
event.stopPropagation(); }, false);
liElement.addEventListener('click', (event) => { console.log('Clicked on li');
event.stopPropagation(); }, false);