//const entries = localStorage.getItem();

//event listeners
//clicking on entry element on home hide:home, entry->edit sending in current entry
//edit pencil on home hide: home, entry->display
const editPencil = document.getElementById('edit');
editPencil.addEventListener('click', function (event) {switchPage(event, false);});

//back on entry hide: entry-> display and edit
const back = document.getElementById('back');
back.addEventListener('click', switchPage, false);

//edit display hide: home, entry->display sending in the entry
const displayToEdit = document.getElementById("display");
display.addEventListener('click', editEntry(event), false);


const edit = document.getElementById('editEntry');
function switchPage(event, read) {
    var home = document.getElementById('home');
    var entry = document.getElementById('entryPage')
    if (home.style.display === "none") {
        home.style.display = "block";
        entry.style.display = "none";
    } else if (entry.style.display === "none") {
        home.style.display = "none";
        entry.style.display = "block";
        if (read == false){
            editEntry(true);
        }
    }
}

function editEntry(edit) {
    const display = document.getElementById("display");
    const editPage = document.getElementById("editPage");
    if (editPage === "none" && edit == true) {
        editPage.style.display = "block";
        display.style.display = "none";
    } else if (editpage === "block" && edit == false) {
        display.style.display = "block";
        editPage.style.display = "none";
    }

}

function homepageEntryList() {
    const entries = localStorage();
    entries.forEach(function(entry) {
     document.getElementById().innerHTML += "";
});
}

function saveEntry() {
    const entry = {};
    const now = new Date().toLocaleTimeString();
    document.getElementById("editDate").innerHTML = now;
    entry.title = document.getElementById("editTitle").value;
    entry.date = document.getElementById("editDate").value;
    entry.text = document.getElementById("editEntry").value;
    entry.file = document.getElementById("editFile").value;
    entries.push(entry);
}

function displayEntry() {
    var title = "";
    var date = document.getElementById("traitsEditor").value;
    var text = personName.concat(" is: ", traits);
    var files = "";
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
           // displayer.innerHTML += '<hr><li id="' + entry.title '">' + allNotes[i] + '</li>';
        }
    }
}