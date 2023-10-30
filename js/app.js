
/*!
    NoteKeep Template
    Created on date: 10/18/2023
    Built on date: 10/20/2023
*/


// ## LOADER
window.addEventListener('load', () => {
    setTimeout( () => {
        document.querySelector(".loader-warpper").classList.toggle("loader-warpper-hide");
    }, 2000);
});


// ## WISH USER
var wishUserStatus = document.getElementById("wishUserStatus");
var dateStatus = new Date();

if (dateStatus.getHours() == 00 || dateStatus.getHours() <= 12) {
    wishUserStatus.innerHTML = "Good morning,";
} else if (dateStatus.getHours() > 12 ^ dateStatus.getHours() >= 19) {
    wishUserStatus.innerHTML = "Good afternoon,";
} else {
    wishUserStatus.innerHTML = "Good evening,";
}


// ## NAVBAR MOBILE
function mobileNavbar() {
    document.getElementById("mobileNavbar").classList.toggle("mobileNavbarToggle");
}


// ## EDIT NOTE
function editNote() {
    document.getElementById("editNote").classList.toggle("editNoteToggle");
}


// ## NEW NOTE
function newNote() {
    document.getElementById("newNote").classList.toggle("editNoteToggle");
}


// ## TOAST NOTIFY: NEW NOTE
function toastNotifynewNote() {
    document.getElementById("toastNotifynewNote").classList.toggle("toastNotifynewNoteToggle");

    setTimeout(() => {
        if(toastNotifynewNote) {
            document.getElementById("toastNotifynewNote").classList.toggle("toastNotifynewNoteToggle");
            document.getElementById("newNote").classList.toggle("editNoteToggle");
        } else {
            document.getElementById("toastNotifynewNote").remove();
        }
    }, 3000);
}
// ## TOAST NOTIFY: EDIT NOTE
function toastNotify() {
    document.getElementById("toastNotify").classList.toggle("toastNotifyToggle");

    setTimeout(() => {
        if(toastNotify) {
            document.getElementById("toastNotify").classList.toggle("toastNotifyToggle");
            document.getElementById("editNote").classList.toggle("editNoteToggle");
        } else {
            document.getElementById("toastNotify").remove();
        }
    }, 3000);
}