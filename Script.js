
const lightButton = document.getElementById("lightButton");
const fanButton = document.getElementById("fanButton");
const lightStatusElement = document.getElementById("lightStatus");
const fanStatusElement = document.getElementById("fanStatus");

let lightStatus = false;
let fanStatus = false;

function toggleLight() {
    lightStatus = !lightStatus;
    if (lightStatus) {
        lightButton.textContent = "Turn Off";
        lightButton.style.backgroundColor = "#dc3545"; 
        lightStatusElement.textContent = "Status: On";
    } else {
        lightButton.textContent = "Turn On";
        lightButton.style.backgroundColor = "#28a745";
        lightStatusElement.textContent = "Status: Off";
    }
}

function toggleFan() {
    fanStatus = !fanStatus;
    if (fanStatus) {
        fanButton.textContent = "Turn Off";
        fanButton.style.backgroundColor = "#dc3545"; 
        fanStatusElement.textContent = "Status: On";
    } else {
        fanButton.textContent = "Turn On";
        fanButton.style.backgroundColor = "#28a745"; 
        fanStatusElement.textContent = "Status: Off";
    }
}


lightButton.addEventListener("click", toggleLight);
fanButton.addEventListener("click", toggleFan);
