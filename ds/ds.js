//SECTION 6


//SECTION 5
function checkNumbers() {
    var someNumbers = [24, -8, "text", 46, 0, 3, 7];

    for (var i = 0; i < 7; i++) {
        var someNumAsText = someNumbers[i];
        var num = parseInt(someNumAsText);
        if (!isNaN(num) && someNumAsText != "") {
            if (num == 0) {
                document.getElementById("display").innerHTML += "<p> O is neither Even or Odd</p>";
            }
            else if (num % 2 == 0)
                document.getElementById("display").innerHTML += "<p>" + num + " is Even</p>";
            else if (num % 2 == 1)
                document.getElementById("display").innerHTML += "<p>" + num + " is Odd (like you!)</p>";
        }
        else {
            document.getElementById("display").innerHTML += "<p> Not even a number!</p>";
        }
    }
}

//SECTION 4
function judgeFood() {
    var food = document.getElementById("foodName").value;
    var isNumber = parseInt(food);
    var judgement = 'initial';
    if (food != "" || isNaN(isNumber)) {
        if (food == "gummy worms") {
            judgement = "YES Please!";
        }
        else if (food == "anchovies") {
            judgement = "NO."
        }
        else {
            judgement = "Maybe. I'll think about it.";
        }
    }
    else {
        judgement = "Please enter a food name."
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