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