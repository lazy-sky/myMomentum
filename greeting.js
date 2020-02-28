const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN ="showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
      event.preventDefault();
      const currentValue = input.value;
      paintGreeting(currentValue);
      saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

let saying = "hi";

function Hi() {
    let nowTime = new Date().getHours();
    if(5 < nowTime && nowTime < 12) {
        return saying = "Good morning, ";
    } else if(nowTime < 17) {
        saying = "Good afternoon, ";
    } else if(nowTime < 20) {
        saying = "Good evening, ";
    } else {
        saying = "Good night, ";
    }
}

function paintGreeting(text) {
    Hi();
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `${saying} ${text}.`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}
init();