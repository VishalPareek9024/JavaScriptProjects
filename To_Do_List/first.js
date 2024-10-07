let timerId = null; // To store the interval ID and prevent multiple timers

function additemfun() {
    let inputbox = document.getElementById('input');
    let userhours = document.getElementById('userhours');
    let userminutes = document.getElementById('userminutes');

    if (inputbox.value === '' || userhours.value === '' || userminutes.value === '') {
        alert("Please Fill All Inputs");
        return;
    }

    if (userhours.value > 24 || userminutes.value > 59) {
        alert("Please Enter Valid Study Time");
        return;
    }

    let input = inputbox.value;
    let hours = parseInt(userhours.value);
    let minutes = parseInt(userminutes.value);

    let divcreation = document.createElement('div');
    divcreation.classList.add('todo-item');

    let h2creation = document.createElement('h2');
    h2creation.innerText = `${input}: ${hours}h ${minutes}m`;
    divcreation.appendChild(h2creation);

    let twobtnsdiv = document.createElement('div');
    twobtnsdiv.classList.add('btn-container');

    let completebtn = document.createElement("button");
    completebtn.innerText = "Completed";
    completebtn.classList.add('btn');
    completebtn.addEventListener('click', () => linethrough(divcreation));
    twobtnsdiv.appendChild(completebtn);

    let startbtn = document.createElement("button");
    startbtn.innerText = "Start";
    startbtn.classList.add('btn');
    startbtn.addEventListener('click', () => startTimeFunction(divcreation, hours, minutes));
    twobtnsdiv.appendChild(startbtn);

    divcreation.appendChild(twobtnsdiv);

    let startTimeDisplay = document.createElement('h4');
    startTimeDisplay.innerText = `${hours}h ${minutes}m 0s`;
    divcreation.appendChild(startTimeDisplay);

    let addedevents = document.getElementById("addedevents");
    addedevents.appendChild(divcreation);

    inputbox.value = '';
    userhours.value = '';
    userminutes.value = '';
}

function linethrough(item) {
    let heading = item.querySelector('h2');
    heading.classList.toggle('linethrough');
}

function startTimeFunction(todoItem, hours, minutes) {
    if (timerId) {
        clearInterval(timerId); // Clear any existing timer
    }

    let display = todoItem.querySelector('h4');
    let totalSeconds = (hours * 3600) + (minutes * 60);
    let remainingSeconds = totalSeconds;

    function updateTimer() {
        if (remainingSeconds <= 0) {
            clearInterval(timerId);
            display.innerText = "0h 0m 0s";
            return;
        }

        remainingSeconds--;

        const hrs = Math.floor(remainingSeconds / 3600);
        const mins = Math.floor((remainingSeconds % 3600) / 60);
        const secs = remainingSeconds % 60;

        display.innerText = `${hrs}h ${mins}m ${secs}s`;
    }

    timerId = setInterval(updateTimer, 1000);
    updateTimer(); // Initialize the display immediately
}

function datetimedisplay() {
    let displaydate = document.getElementById("displaydate");
    let displaytime = document.getElementById("displaytime");
    let fulldatetime = new Date();
    let localdate = `${fulldatetime.getDate()}/${fulldatetime.getMonth() + 1}/${fulldatetime.getFullYear()}`;
    displaydate.innerText = localdate;

    let localTime = `${fulldatetime.getHours()}:${fulldatetime.getMinutes()}:${fulldatetime.getSeconds()}`;
    displaytime.innerText = localTime;
}

setInterval(datetimedisplay, 1000);
