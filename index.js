// Hide Notifications And Disabled Submit Button Function Call
disableSubmitBtn();
hideNotification();

// Generate PIN Function
function generatePin() {
  let pin = Math.floor(999 + Math.random() * 9000);
  document.getElementById("generated-pin-viewer").value = pin;
  document.getElementById("input-pin-viewer").value = "";
  document.getElementById("btnSubmit").disabled = true;
  hideNotification();
}

// Submit Button Disabled Function
function disableSubmitBtn() {
  let inputPin = document.getElementById("input-pin-viewer").value;
  if (inputPin == "") {
    document.getElementById("btnSubmit").disabled = true;
  }
}

// Backspace Button Function
function btnBackspace() {
  hideNotification();
  timeLeft();
  document.getElementById("btnSubmit").disabled = true;
  let inputPin = document.getElementById("input-pin-viewer").value;
  inputPin = inputPin.substr(0, inputPin.length - 1);
  printOut(inputPin);
}

// Clear Button Function
function btnClear() {
  hideNotification();
  timeLeft();
  document.getElementById("btnSubmit").disabled = true;
  document.getElementById("input-pin-viewer").value = "";
}

// Given PIN Output Function
function printOut(num) {
  document.getElementById("input-pin-viewer").value = num;
}

// All Number Click EventListener Function
let bntNumber = document.getElementsByClassName("number");
for (var i = 0; i < bntNumber.length; i++) {
  bntNumber[i].addEventListener("click", function () {
    let inputPin = document.getElementById("input-pin-viewer").value;
    let leftCount = document.getElementById("left-count").innerText;
    if (inputPin.length == 3 && leftCount != 0) {
      document.getElementById("btnSubmit").disabled = false;
      document.getElementById("btn-generate-pin").disabled = false;
    }
    if (inputPin.length < 4) {
      inputPin = inputPin + this.id;
      printOut(inputPin);
    }
  });
}

// Submit Button Function
function submitPinBtn() {
  let generatedPin = document.getElementById("generated-pin-viewer").value;
  let inputPin = document.getElementById("input-pin-viewer").value;
  if (generatedPin == "") {
    infoNotification();
  } else {
    if (generatedPin == inputPin) {
      successNotification();
    } else {
      errorNotification();
      // Error Count Function
      let leftCount = parseInt(document.getElementById("left-count").innerText);
      leftCount = leftCount - 1;
      document.getElementById("left-count").innerText = leftCount;
      if (leftCount == 0) {
        for (var i = 0; i < document.getElementsByClassName("button").length; i++) {
          document.getElementsByClassName("button")[i].onclick = false;
        }
        document.getElementById("btnSubmit").disabled = true;
        document.getElementById("btn-generate-pin").disabled = true;
        document.getElementById("timeleft-error").style.display = "block";
        document.getElementById("pin-error").style.display = "none";
      }
    }
  }
}

// Time Left Notification Function
function timeLeft() {
  if (document.getElementById("left-count").innerText == 0) {
    document.getElementById("timeleft-error").style.display = "block";
  }
}

// All Notification Function
function errorNotification() {
  document.getElementById("pin-success").style.display = "none";
  document.getElementById("pin-error").style.display = "block";
}
function successNotification() {
  document.getElementById("pin-success").style.display = "block";
  document.getElementById("pin-error").style.display = "none";
}
function hideNotification() {
  document.getElementById("pin-success").style.display = "none";
  document.getElementById("pin-error").style.display = "none";
  document.getElementById("timeleft-error").style.display = "none";
}
function infoNotification() {
  alert('Please Generate Your PIN First');
}