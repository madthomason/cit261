const homepage = document.getElementById('edit');

homepage.addEventListener('click', switchPage,
    false);

const edit = document.getElementById('editEntry');

const back = document.getElementById('back');
back.addEventListener('click', switchPage, false)

function switchPage() {
    const home = document.getElementById('home');
    const entry = document.getElementById('entryPage')
    if (home.style.display === "none") {
        home.style.diplay = "block";
        entry.style.display = "none";
    } else {

        home.style.display = "none";
        entry.style.display = "block";
    }
}
function editEntry() {
    const display = document.getElementById("display");
    const editPage = document.getElementById("editPage");
    if (editPage === "none") {
        editPage.style.display = "block";
        display.style.display = "none";
    } else {
        display.style.display = "block";
        editPage.style.display = "none";
    }
    const now = new Date().toDateString();
    document.getElementById("editDate").innerHTML = now;
}