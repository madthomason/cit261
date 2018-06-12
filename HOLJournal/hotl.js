//const entries = localStorage.getItem();

//event listeners:
window.addEventListener('load', function () {displayHomeList();});


//edit pencil on home hide: home, entry->display
const editPencil = document.getElementById('edit');
editPencil.addEventListener('touchend', function () {
    switchPage(false);
});

//back on entry hide: entry-> display and edit
const back = document.getElementsByClassName('back');
back[0].addEventListener('touchend', function () {
    switchPage(true);
    displayHomeList();
});
back[1].addEventListener('touchend', function () {
    if (back[1].disabled !== true)
        switchPage(true);
    displayHomeList();
});

//edit display hide: home, entry->display sending in the entry
const displayToEdit = document.getElementById("display");
displayToEdit.addEventListener('touchend', function () {
    editEntry(true);
});

const save = document.getElementById("save");
save.addEventListener('touchend', function () {
    saveEntry();
});

const cancel = document.getElementById("cancel");
cancel.addEventListener('touchend', function () {
    document.getElementsByClassName("back")[1].style.display = "block";
    document.getElementsByClassName("back").disabled = false;
    /*if (element)
        displayEntry(element);
    else*/
    switchPage(false);

});

//const edit = document.getElementById('editEntry');

function switchPage(read, element) {
    const home = document.getElementById('home');
    const entryPage = document.getElementById('entryPage');
    home.classList.toggle("hidden");
    entryPage.classList.toggle("hidden");

    if (read === true && element) {
        /*const entry = JSON.parse(element);*/
        //console.log(entry.title);
        //editEntry();
    }
    if (read !== true) {
        editEntry(true);

    }
}

function editEntry(bool) {
    const display = document.getElementById("display");
    const editPage = document.getElementById("editPage");
    display.classList.toggle("hidden");
    editPage.classList.toggle("hidden");
    if (bool === true) {
        document.getElementsByClassName("back")[1].style.display = "none";
        document.getElementsByClassName("back").disabled = true;
        document.getElementById("editDate").value = new Date().toISOString().substring(0, 10);
    }
}

function saveEntry() {
    const entry = {};
//https://www.c-sharpcorner.com/UploadFile/5089e0/database-connectivity-in-javascript/
    entry.title = document.getElementById("editTitle").value;
    entry.date = document.getElementById("editDate").value;
    entry.text = document.getElementById("editEntry").value;
    const file = document.getElementById("editFile").value;
    if (file) {
        /* var preview = document.querySelector('img'); //selects the query named img
         var file    = document.querySelector('input[type=file]').files[0]; //sames as here
         var reader  = new FileReader();
         https://stackoverflow.com/questions/22087076/how-to-make-a-simple-image-upload-using-javascript-html*/
        entry.file = getBase64Image(file);
    } else {
        entry.file = file;
    }

    var entriesStored = localStorage.getItem("all_entries");
    var allEntries = JSON.parse(entriesStored);
    if (allEntries == null) {
        allEntries = [];
    }
    allEntries.push(entry);
    entriesStored = JSON.stringify(allEntries);
    localStorage.setItem("all_entries", entriesStored);
    document.getElementById("editTitle").value = null;
    document.getElementById("editDate").value = null;
    document.getElementById("editEntry").value = null;
    document.getElementById("editFile").value = null;
    displayEntry(entry);
    editEntry();
}

function displayEntry(entry) {
    let title = document.getElementById("titleEntry");
    let date = document.getElementById("dateEntry");
    let text = document.getElementById("textFull");
    if (entry.title === "") {
        title.innerHTML = entry.date;
        date.innerHTML = null;
    }
    else {
        title.innerHTML = entry.title;
        date.innerHTML = entry.date.toLocaleString();
    }
    text.innerHTML = entry.text;
    let files = "";

}

function displayHomeList() {
    localStorage.removeItem("");
    var storedEntries = localStorage.getItem("all_entries");
    var allEntries = JSON.parse(storedEntries);
    if (allEntries) {
        var displayer = document.getElementById("entriesDisplay");
        displayer.innerHTML = null;
        var numberOfEntries = allEntries.length;
        for (var i = numberOfEntries - 1; i >= 0; i--) {
            displayer.innerHTML += ' <li id="' + allEntries[i].title + '" itemid="' + i +
                '" ontouchend="switchPage(true, this)"> ' + '<h1 class="title">' + allEntries[i].title + '</h1>' +
                ' <div class="entryTD"> ' +  '<p class="text">' + allEntries[i].text + '</p> <p class="date">' +
                allEntries[i].date + '</p> </div> <hr> </li>';
            //\''+ JSON.stringify(allEntries[i]) +'\'
        }
    }
}

/*src =
https://stackoverflow.com/questions/19183180/how-to-save-an-image-to-localstorage-and-display-it-on-the-next-page*/
function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

//SECTION 5 -Journaling
function saveReminder() {
    var currentDateTime = new Date();
    var description = document.getElementById("describe").value;
    var note = document.getElementById("noteInput").value;
    var fullNote = currentDateTime.toLocaleString() + "--" + description;


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
