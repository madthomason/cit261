//SECTION 6
function saveFriends() {
    var newFriend = {
        "name":document.getElementById("name").value,
        "age":document.getElementById("age").value,
        "group":document.getElementById("group").value
    }

    var allFriends = null;
    var friendsStored = localStorage.getItem("all_friends");

    if (friendsStored == "null") {
        allFriends = [];
    }
    else {
        allFriends = JSON.parse(friendsStored);
    }
    allFriends.push(newFriend);
    var friendsStored = JSON.stringify(allFriends);
    localStorage.setItem("all_friends", friendsStored);

    showAllFriends();
    document.getElementById("name").value = null;
    document.getElementById("age").value = null;
    document.getElementById("group").value = null;
}

function showAllFriends() {
    var storedFriends = localStorage.getItem("all_friends");
console.log(storedFriends);
    if (storedFriends !== "null" || storedFriends === "") { //Why is it still going through since it is null?
        var allFriends = JSON.parse(storedFriends);
        var displayer = document.getElementById("friendsDisplay");
        displayer.innerHTML = null;
        var numberOfFriends = allFriends.length;
        for (var i = numberOfFriends - 1; i >= 0; i--) {
            displayer.innerHTML += "<hr><p>Friend: "
                + allFriends[i]["name"] + "</p>"
                + "<p> Age: " + allFriends[i]["age"] + "</p>"
                + "<p> Group: " + allFriends[i]["group"] + "</p>";
        }
    }
    else {
        document.getElementById("friendsDisplay").innerHTML = "<p> Go make some friends!</p>";
    }
}

function clearFriends() {
    localStorage.setItem("all_friends", null);
    showAllFriends(); //?
}

//SECTION 5 -Journaling
function saveReminder() {
    var currentDateTime = new Date();
    var description = document.getElementById("describe").value;
    var note = document.getElementById("noteInput").value;
    var fullNote = currentDateTime.toLocaleString() + "--" + description;
    fullNote += "<p>" + note + "</p>";

    var notesStored = localStorage.getItem("all_notes");
    var allNotes = JSON.parse(notesStored);
    if (allNotes == null) {
        allNotes = [];
    }
    allNotes.push(fullNote);
    var notesStored = JSON.stringify(allNotes);
    localStorage.setItem("all_notes", notesStored);
    showAllNotes();
    document.getElementById("describe").value = null;
    document.getElementById("noteInput").value = null;
}

function showAllNotes() {
    var storedNotes = localStorage.getItem("all_notes");
    var allNotes = JSON.parse(storedNotes);
    if (allNotes) {
        var displayer = document.getElementById("notesDisplay");
        displayer.innerHTML = null;
        var numberOfNotes = allNotes.length;
        for (var i = numberOfNotes - 1; i >= 0; i--) {
            displayer.innerHTML += "<hr><p>" + allNotes[i] + "</p>";
        }
    }
}

function clearNotes() {

}

//SECTION 5 -Checking
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