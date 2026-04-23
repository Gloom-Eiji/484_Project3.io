console.log("Status Manager Started");

let intervalId = null;

const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");

// Task 3: Update title on load
mainTitle.innerHTML = "DOM Project: Ready!";

// Task 4: Add custom attribute to toggle button
toggleButton.setAttribute("data-action", "status-toggle");

// Task 9: Set all list items to blue on page load
function highlightListItems() {
  const listItems = document.querySelectorAll("li");
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "blue";
  }
}

// Task 8: Append current timestamp inside status-output
function createTimestamp() {
  const timeStamp = document.createElement("span");
  timeStamp.innerHTML = ` ${new Date().toLocaleTimeString()}`;
  statusOutput.appendChild(timeStamp);
}

// Task 5, 6, 7, 8: Toggle status visibility, prevent default, manage styles and timestamp
function toggleStatus(e) {
  e.preventDefault();
  statusOutput.classList.toggle("hidden");

  if (!statusOutput.classList.contains("hidden")) {
    mainTitle.style.backgroundColor = "yellow";
    createTimestamp();
  } else {
    mainTitle.style.backgroundColor = "";
  }
}

// Task 10: Flash control panel every 500ms; guard against multiple intervals
function startFlashing() {
  if (intervalId !== null) return;
  intervalId = setInterval(function () {
    controlPanel.classList.toggle("hidden");
  }, 500);
}

// Task 10: Stop flashing and restore panel visibility
function stopFlashing() {
  clearInterval(intervalId);
  intervalId = null;
  controlPanel.classList.remove("hidden");
}

highlightListItems();
toggleButton.addEventListener("click", toggleStatus);
timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);
