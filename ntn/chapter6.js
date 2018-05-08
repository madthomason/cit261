/*Code Type
    1 element
    2 attribute
    3 text
    8 comment
    9 body*/
function theDOM() {
    //lists returned by
    const body = document.body;
    const listImages = document.images;
    const arrayImages = Array.from(listImages);

    const listItems = document.getElementsByTagName('li');
    // same for by className

    //Query Selector over getEl by ID (#x) or Classname (.x)
    const elId = document.getElementById('numchucks').value;
    const querySel = document.querySelector('#numchucks').value;
    console.log("elementById vs querySelector = " + elId == querySel);
    const heroes = document.getElementById('roster');
    //can be used for specified
    const ww = document.querySelector('ul#roster li:last-child');
    console.dir(ww);
    //console.log(button.childNodes);
    //or
    // const button1 = button.querySelector('?');
    ww.setAttribute('id', 'Amazon');
    console.log(ww.getAttribute('id'));

    ww.classList.add('warrior');
    console.log(ww.className);
    ww.classList.remove('warrior');
    console.log(ww.className);

   //creating a new element
    const flash = document.createElement('li');
    //create the text node for it
    const flashText = document.createTextNode('Flash');
    //add the text to the element
    flash.appendChild(flashText);
    heroes.appendChild(flash);

    const aquaman = createElement('li', 'Aquaman');

    heroes.appendChild(aquaman);
    const superman = heroes.children[0];
    superman.style.border = "blue 5px solid";
    superman.style.borderRadius = "5px";
    superman.style.backgroundColor = "red";
    superman.classList.add('highlighted');
}

function createElement(tag, text) {
    const el = document.createElement(tag);
    el.textContent = text;
    return el;
}
