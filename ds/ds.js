//SECTION 5
function 

//SECTION 4
function judgeFood() {
    var food = document.getElementById("foodName").value;
    var judgement = 'initial';
    if (food == "gummy worms") {
        judgement = "YES Please!";
    }
    else if(food == "anchovies") {
        judgement = "NO."
    }
    else {
        judgement = "Maybe. I'll think about it.";
    }
    document.getElementById("display").innerHTML = food + "? " + judgement;
}

//SECTION 3
function loadTraits() {
    var personName = document.getElementById("nameInput").value;
    var storyHTML = localStorage.getItem(personName);
    document.getElementById("traitsEditor").value = storyHTML;
}

function saveTraits() {
    var personName = document.getElementById("nameInput").value;
    var traitsHTML = document.getElementById("traitsEditor").value;
    localStorage.setItem(personName, traitsHTML);
}

function displayTraits() {
    var personName = document.getElementById("nameInput").value;
    var traits = document.getElementById("traitsEditor").value;
    var traitsHTML = personName.concat(" is: ", traits);
    document.getElementById("displayTraits").innerHTML = traitsHTML;
}