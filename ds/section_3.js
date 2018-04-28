function loadTraits() {

}

function saveTraits() {
    var traitsBelongTo = document.getElementById("nameInput").value;
    var traitsHTML = document.getElementById("traitsEditor").value;
    localStorage.setItem(traitsBelongTo, traitsHTML);
}

function displayTraits() {

}