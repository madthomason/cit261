//const entries = localStorage.getItem();

//event listeners:
window.addEventListener('load', function () {
    displayHomeList();
});


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

<<<<<<< HEAD
//edit display hide: home, entry->display sending in the entry
const displayToEdit = document.getElementById("display");
displayToEdit.addEventListener('touchend', function () {
    editEntry();
});
=======
>>>>>>> master

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

<<<<<<< HEAD
function switchPage(read, element) {
    const home = document.getElementById('home');
    const entryPage = document.getElementById('entryPage');
    const display = document.getElementById("display");
    const editPage = document.getElementById("editPage");
    home.classList.toggle("hidden");
    entryPage.classList.toggle("hidden");

    if (read === true && element) {
        /*const entry = JSON.parse(element);*/
        //console.log(entry.title);
        //editEntry();
        display.classList.remove("hidden");
        editPage.classList.add("hidden");
    }
    if (read !== true) {
        editEntry();
=======
function switchPage(read, entry_id) {
    const home = document.getElementById('home');
    const entryPage = document.getElementById('entryPage');
    home.classList.toggle("hidden");
    entryPage.classList.toggle("hidden");

    if (read === true && entry_id) {
        getEntries(entry_id).then((request) => {
            let entry = JSON.parse(request.responseText);
            displayEntry(entry);
        });

    }
    if (read !== true) {
        editEntry(true);

>>>>>>> master
    }
}

function editEntry(bool) {
    const display = document.getElementById("display");
    const editPage = document.getElementById("editPage");
<<<<<<< HEAD
    if (!display.classList.contains(".hidden")) {
        display.classList.add("hidden");
        editPage.classList.remove("hidden");
=======
    display.classList.toggle("hidden");
    editPage.classList.toggle("hidden");
    if (bool === true) {
>>>>>>> master
        document.getElementsByClassName("back")[1].style.display = "none";
        document.getElementsByClassName("back").disabled = true;
        document.getElementById("editDate").value = new Date().toISOString().substring(0, 10);
    }
<<<<<<< HEAD
    if (bool === false) {
        display.classList.remove("hidden");
        editPage.classList.add("hidden");
    }


    //from display edit the contents
    editDisplay()
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
=======
}

function saveEntry(update) {
    const entry_obj = {};
    entry_obj.title = document.getElementById("editTitle").value;
    entry_obj.date = document.getElementById("editDate").value;
    entry_obj.entry = document.getElementById("editEntry").value;
    const file = document.getElementById("editFile").value;

    if (update) {
        updateEntry(entry_obj);
    } else {
        postData(entry_obj);
    }

    // if (file !== null) {
    /* var preview = document.querySelector('img'); //selects the query named img
     var file    = document.querySelector('input[type=file]').files[0]; //sames as here
     var reader  = new FileReader();
     https://stackoverflow.com/questions/22087076/how-to-make-a-simple-image-upload-using-javascript-html*/
    // entry.file = getBase64Image(file);
    // } else {
    //     entry.file = file;
    // }

    // var entriesStored = localStorage.getItem("all_entries");
    // var allEntries = JSON.parse(entriesStored);
    // if (allEntries == null) {
    //     allEntries = [];
    // }
    // allEntries.push(entry);
    // entriesStored = JSON.stringify(allEntries);
    // localStorage.setItem("all_entries", entriesStored);
>>>>>>> master
    document.getElementById("editTitle").value = null;
    document.getElementById("editDate").value = null;
    document.getElementById("editEntry").value = null;
    document.getElementById("editFile").value = null;
<<<<<<< HEAD
    displayEntry(entry);
    editEntry(false);
}

function displayEntry(entry) {

    let title = document.getElementById("titleEntry");
    let date = document.getElementById("dateEntry");
    let text = document.getElementById("textFull");
    let file = document.getElementById("fileDisplay");
    if (entry.title === "") {
        title.innerHTML = entry.date;
        date.innerHTML = null;
    }
    else {
        title.innerHTML = entry.title;
        date.innerHTML = entry.date.toLocaleString();
    }
    text.innerHTML = entry.text;
    if (entry.file) {
        file.innerHTML += entry.file;
    }

}

function editDisplay() {
    let title = document.getElementById("editTitle");
    let date = document.getElementById("editDate");
    let text = document.getElementById("editEntry");


    title.value = document.getElementById("titleEntry").innerHTML;
    date.value = document.getElementById("dateEntry").innerHTML;
    text.value = document.getElementById("textFull").innerHTML;
    let files = ""; //document.getElementById("editFile");  for later
}

function displayHomeList() {
    localStorage.removeItem("");
    let storedEntries = localStorage.getItem("all_entries");
    let allEntries = JSON.parse(storedEntries);
    if (allEntries) {
        let displayer = document.getElementById("entriesDisplay");
        displayer.innerHTML = null;
        let numberOfEntries = allEntries.length;
        for (let i = numberOfEntries - 1; i >= 0; i--) {
            let title;
            let date = allEntries[i].date;
            if (allEntries[i].title) {
                title = allEntries[i].title;
            }
            else {
                title = allEntries[i].date;
                date = '';
            }
            displayer.innerHTML += ' <li id="' + allEntries[i].title + '" itemid="' + i +
                '" ontouchend="switchPage(true, this)"> ' + '<h1 class="title">' + title + '</h1>' +
                ' <div class="entryTD"> ' + '<p class="text">' + String(allEntries[i].text).substring(0, 32) + '</p> <p class="date">' +
                date + '</p> </div> <hr> </li>';
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
=======
    displayEntry(entry_obj);
    editEntry();
}

function displayEntry(entry_obj) {
    //edit display hide: home, entry->display sending in the entry
    const displayToEdit = document.getElementById("display");
    displayToEdit.addEventListener('touchend', function () {
        editEntry(true);
        editDisplay(entry_obj);
    });

    //display entry
    let title = document.getElementById("titleEntry");
    let date = document.getElementById("dateEntry");
    let text = document.getElementById("textFull");
    let temp_date = formatDate(entry_obj.date);
    //date is title when there is no title
    if (entry_obj.title === "") {
        title.innerHTML = temp_date;
        date.innerHTML = null;
    }
    else {
        title.innerHTML = entry_obj.title;
        date.innerHTML = temp_date;
    }
    text.innerHTML = entry_obj.entry;
    let files = "";


}

function editDisplay(entry_obj) {
    if (entry_obj.title) {
        document.getElementById("editTitle").value = entry_obj.title;
    }
    document.getElementById("editDate").value = entry_obj.date;
    document.getElementById("editEntry").value = entry_obj.entry;
    // document.getElementById("file").value = ;


}


function displayHomeList() {
    // localStorage.removeItem("");
    // let storedEntries = localStorage.getItem("all_entries");
    // let allEntries = JSON.parse(storedEntries);
    getEntries().then((request) => {
        let allEntries = JSON.parse(request.responseText);
        if (allEntries) {
            let displayer = document.getElementById("entriesDisplay");
            displayer.innerHTML = null;
            for (let i = allEntries.length - 1; i >= 0; i--) {
                let title;
                let date = formatDate(allEntries[i].date);
                if (allEntries[i].title) {
                    title = allEntries[i].title;
                }
                else {
                    title = date;
                    date = '';
                }
                displayer.innerHTML += ' <li id="' + allEntries[i].title + '" itemid="' + i +
                    '" ontouchend="switchPage(true, ' + allEntries[i].entry_id + ')"> ' + '<h1 class="title">' + title + '</h1>' +
                    ' <div class="entryTD"> ' + '<p class="text">' + String(allEntries[i].entry).substring(0, 45) + '</p> <p class="date">' +
                    date + '</p> </div> <hr> </li>';
            }
        } else {
            console.log("exit");
        }
    });
}

function searchEntries() {
    let input = document.getElementById("search");
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("entriesDisplay");
    let li = ul.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        let h1 = li[i].getElementsByTagName("h1")[0];
        h1 += li[i].getElementsByTagName("p")[0];
        if (h1.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function formatDate(date) {
    let temp_date = new Date(date);
    return (temp_date.getMonth() + 1) + '/' + temp_date.getDate() + '/' + temp_date.getFullYear().toString().substr(2, 4);
}

>>>>>>> master

/*
    GET, POST, UPDATE (PUT), and DELETE XHR
 */
function getEntries(id) {
    return Promise.resolve().then(() => {
        let url = 'https://dev-api.doorstepdates.com/journal/entries/';
        if (id !== null && id !== undefined) {
            url += id;
        }
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        return xhr;
    }).then(promiseResponse, (err) => {
        console.error(err);
    });
}

function updateEntry(entry_obj) {
    let url = 'https://dev-api.doorstepdates.com/journal/entries/' + entry_obj.entry_id;
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        var response = JSON.parse(xhr.responseText);
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.table(response);
        } else {
            console.error(response);
        }
    };
    xhr.send(JSON.stringify(entry_obj));
}

function postEntry(entry_obj) {
    let url = `https://dev-api.doorstepdates.com/journal/entries/`;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        var response = JSON.parse(xhr.responseText);
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.table(response);
        } else {
            console.error(response);
        }
    };
    xhr.send(JSON.stringify(entry_obj));
}

function deleteEntry(id) {
    let url = 'https://dev-api.doorstepdates.com/journal/entries/' + id;
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url, true);
    xhr.onload = function () {
        var response = JSON.parse(xhr.responseText);
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.table(response);
        } else {
            console.error(response);
        }
    };
}

<<<<<<< HEAD
=======
function promiseResponse(xhr) {
    return new Promise((resolve, reject) => {
        xhr.onload = () => {
            if (xhr.readyState === 4 && (xhr.status < 200 || xhr.status >= 300)) {
                reject({request: xhr});
            } else {
                resolve(xhr);
            }
        };
        xhr.onerror = () => {
            reject({request: xhr});
        };
        xhr.send();
    });
}
>>>>>>> master
