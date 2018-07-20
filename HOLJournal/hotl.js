//Global function, I know, horrible.
let update = false;
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

//save (bookmark)
const save = document.getElementById("save");
save.addEventListener('touchend', function () {
    saveEntry();
});

const cancel = document.getElementById("cancel");
cancel.addEventListener('touchend', function () {
    document.getElementsByClassName("back")[1].style.display = "block";
    document.getElementsByClassName("back").disabled = false;
    switchPage(false);
    resetEdit();
});


function switchPage(displ, entry_id) {
    const home = document.getElementById('home');
    const entryPage = document.getElementById('entryPage');
    // const display = document.getElementById("display");
    // const editPage = document.getElementById("editPage");
    home.classList.toggle("hidden");
    entryPage.classList.toggle("hidden");

    if (displ === true && entry_id) {
        getEntries(entry_id).then((request) => {
            let entry = JSON.parse(request.responseText);
            displayEntry(entry);
        }); //are these necessary?
        // display.classList.remove("hidden");
        // editPage.classList.add("hidden");
    }
    if (displ !== true) {
        editEntry(true);
    }
}

function editEntry(bool) {
    const display = document.getElementById("display");
    const editPage = document.getElementById("editPage");
    if (!display.classList.contains(".hidden")) {
        display.classList.add("hidden");
        editPage.classList.remove("hidden");
        document.getElementsByClassName("back")[1].style.display = "none";
        document.getElementsByClassName("back").disabled = true;
        document.getElementById("editDate").value = new Date().toISOString().substring(0, 10);
    }
    if (bool === false) {
        display.classList.remove("hidden");
        editPage.classList.add("hidden");
    }


    //from display edit the contents
    // editDisplay();
}

function saveEntry() {
    const entry_obj = {};

    entry_obj.title = document.getElementById("editTitle").value;
    entry_obj.date = document.getElementById("editDate").value;
    entry_obj.entry = document.getElementById("editEntry").value;
    entry_obj.file = document.getElementById("video").value;

    if (update) {
        updateEntry(entry_obj);
        update = false;
    } else {
        postEntry(entry_obj);
    }

    resetEdit();
    //wont work to delete or update if just created
    displayEntry(entry_obj);
    editEntry(false);
}

function displayEntry(entry_obj) {
    //edit display hide: home, entry->display sending in the entry
    const displayToEdit = document.getElementById("textFull");
    displayToEdit.addEventListener('touchend', function () {
        editEntry(true);
        editDisplay(entry_obj);
    });

    let title = document.getElementById("titleEntry");
    let date = document.getElementById("dateEntry");
    let text = document.getElementById("textFull");
    let file = document.getElementById("youtube");
    let formattedDate = formatDate(entry_obj.date);
    //embed the actual youtube code
    if (entry_obj.file) {
        file.src += entry_obj.file;
        file.classList.remove("hidden");
    }
    else {
        file.classList.add("hidden");
    }

    //date is title when there is no title
    if (entry_obj.title === "") {
        title.innerHTML = formattedDate;
        date.innerHTML = null;
    }
    else {
        title.innerHTML = entry_obj.title;
        date.innerHTML = formattedDate;
    }

    text.innerHTML = entry_obj.entry;


    const deleteButton = document.getElementById("delete");
    deleteButton.addEventListener('touchend', function () {
        deleteEntry(entry_obj.entry_id).then(()=> {
            displayHomeList();
            switchPage(true);
        });

    });
}

function editDisplay(entry_obj) {
    if (entry_obj.title) {
        document.getElementById("editTitle").value = entry_obj.title;
    }
    document.getElementById("editDate").value = new Date(entry_obj.date).toISOString().substr(0, 10);
    document.getElementById("editEntry").value = entry_obj.entry;
    document.getElementById("video").value = entry_obj.file;
    let id = document.getElementById("editEntry");
    id.setAttribute("data-identifier", entry_obj.entry_id);

    update = true;
}


function displayHomeList() {

    getEntries().then((request) => {
        let allEntries = JSON.parse(request.responseText);
        localStorage.setItem("entries", JSON.stringify(allEntries));
        if (allEntries) {
            let displayer = document.getElementById("entriesDisplay");
            displayer.innerHTML = null;
            for (let i = allEntries.length - 1; i >= 0; i--) {
                let title;
                let date = formatDate(allEntries[i].date);
                let file = '';
                if (allEntries[i].title) {
                    title = allEntries[i].title;
                }
                else {
                    title = date;
                    date = '';
                }
                if (allEntries[i].file !== null)
                    file = ' <i class="fas fa-paperclip"></i>';
                displayer.innerHTML += ' <li id="' + allEntries[i].title + '" itemid="' + i +
                    '" ontouchend="switchPage(true, ' + allEntries[i].entry_id + ')" class=""> ' + '<h1 class="title">' + title + file + '</h1>' +
                    ' <div class="entryTD"> ' + '<p class="text">' + String(allEntries[i].entry).substring(0, 60) + '</p> <p class="date">' +
                    date + '</p> </div> <hr> </li>';
            }
        } else {
            console.log("exit");
        }
    });
}


function searchEntries(search) {
    let filter = search.value.toUpperCase();
    let items = JSON.parse(localStorage.getItem("entries")).reverse();
    let ul = document.getElementById("entriesDisplay");
    let li = ul.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
        let item = items[i].title + items[i].entry;
        //     h1 += li[i].getElementsByTagName("p")[0];
        if (item.toString().toUpperCase().indexOf(filter) > -1) {
            li[i].classList.remove("hidden");
        } else {
            li[i].classList.add("hidden");
        }
    }
}

function resetEdit() {
    document.getElementById("editTitle").value = '';
    document.getElementById("editDate").value = '';
    document.getElementById("editEntry").value = '';
    document.getElementById("video").value = '';
}

function formatDate(date) {
    let temp_date = new Date(date);
    return (temp_date.getMonth() + 1) + '/' + temp_date.getDate() + '/' + temp_date.getFullYear().toString().substr(2, 4);
}

/*
    GET, POST, UPDATE (PUT), and DELETE XHR
 */
function getEntries(id) {
    return Promise.resolve().then(() => {
        let url = 'https://dev-api.doorstepdates.com/journal/api/entries/';
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
    let id = document.getElementById("editEntry");
    let url = 'https://dev-api.doorstepdates.com/journal/api/entries/' + id.getAttribute("data-identifier");
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
    let url = `https://dev-api.doorstepdates.com/journal/api/entries`;
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
    return Promise.resolve().then(() => {
    let url = 'https://dev-api.doorstepdates.com/journal/api/entries/' + id;

    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url, true);
    return xhr;
    }).then(promiseResponse, (err) => {
        console.error(err);
    });
}

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
