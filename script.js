// Variables 
const list = document.querySelector("ul");


// Setting up timer 

let hh = 0;
let mm = 0;
let ss = 0;
let cron;
let isStartOn = false;

function start(){
    if (isStartOn == false) {
        timer();
        cron = setInterval(() => { timer(); }, 1000);
        isStartOn = true;
    }
}

function reset(){
    ss = 0;
    mm = 0;
    hh = 0;
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('minute').innerHTML = "00";
    document.getElementById('second').innerHTML = "00";
    stop();
    isStartOn = false;
}

function stop(){
    clearInterval(cron);
    isStartOn = false;
}

function timer(){
    ss++;
    if (ss == 60) {
        ss = 0;
        mm++;
    if (mm == 60){
        mm = 0;
        hh++;
        }
    }

    document.getElementById('hour').innerHTML = returnData(hh);
    document.getElementById('minute').innerHTML = returnData(mm);
    document.getElementById('second').innerHTML = returnData(ss);
}

function returnData(input) {
    return input > 9 ? input : `0${input}`
}

// Setting up currently date and hour

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function updateDateTime() {
  const today = new Date();
  const day = today.getDate();
  const monthIndex = today.getMonth();
  const year = today.getFullYear();

  const formattedDate = `${day} ${months[monthIndex]}, ${year}`;
  const formattedTime = `${returnData(today.getHours())}:${returnData(today.getMinutes())}:${returnData(today.getSeconds())}`;

  document.getElementById("current-date").innerHTML = formattedDate;
  document.getElementById("current-time").innerHTML = formattedTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);

// Setting up new project button function
let maxProjects = 0;

function numProjects(){

    if (maxProjects != 5){
        addListItem();
        maxProjects ++;
        console.log("+1")
    }
    else {
        const warLimitItems = window.alert("You reached the limits of projects please delete one.")
    }
}

// Add new project span
function addListItem() {
    const newItemName = prompt("Enter the name of the new project:");
    const newItemNameLen = newItemName.length;
    if (newItemNameLen > 15){
        const warLimitWords = window.alert("You reached the character limits(15) please reenter new name.")
    }
    const newItem = document.createElement("li");
    const newSpan = document.createElement("span");
    newSpan.textContent = newItemName;
    const newDeleteBtn = document.createElement("button");
    newSpan.className = "new";
    newDeleteBtn.className = "delete";
    newDeleteBtn.setAttribute("onclick", "deleteListItem(event)");
    newDeleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    newItem.appendChild(newSpan);
    newItem.appendChild(newDeleteBtn);
    list.appendChild(newItem);
}

// Delete new project span
function deleteListItem(){
    const deleteListItem = event.target.closest("li");
    deleteListItem.remove();
    maxProjects--;
}

// Setting up total and project time


// Reset timer once list item is selected
list.addEventListener("click", (event) => {
    const selecItem = event.target.closest("li");
    if (!selecItem) return;
    const allItems = document.querySelectorAll("li");
    allItems.forEach((item) => {
      if (item !== selecItem) {
        item.style.backgroundColor = "";
      }
    });
    selecItem.style.backgroundColor = "#252c47";
    reset();
});


// UI
const btnNew = document.getElementById('push-down');
const dropdown = document.querySelector(".dropdown");

btnNew.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});
