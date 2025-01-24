const navWelcome = document.getElementById('welcome-item');
const navAbout = document.getElementById('about-item');
const navEmote = document.getElementById('emote-item');
const navContact = document.getElementById('contact-item');
const checkbox = document.getElementById('check')

navWelcome.addEventListener("click", uncheck);
navAbout.addEventListener("click", uncheck);
navEmote.addEventListener("click", uncheck); 
navContact.addEventListener("click", uncheck);

function uncheck() {
    if(checkbox.checked == true) {
        checkbox.checked = false;
    }
}

uncheck();

if(checkbox.checked == true) {
    //hide scrollbar
}