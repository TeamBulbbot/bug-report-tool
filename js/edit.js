$(document).ready(function() {
  $(".sidenav").sidenav();
  $(".modal").modal();
  $("select").formSelect();
  $(".dropdown-trigger").dropdown();
  $("textarea#reportID, textarea#newContent, textarea#stepsToRepro1").characterCounter();
});

var intervalID = window.setInterval(myCallback, 1000);
var strInternval = window.setInterval(checkIfSTRISActive, 1000);

var removeStr = window.setInterval(callbackSTR, 100);
let amtOfSteps = 2;

const input = document.getElementById("stepsToRepro1");
input.addEventListener("input", updateValue);

function checkIfSTRISActive() {
  if (document.getElementById("section").value == 2) {
    document.getElementById("strField").style.display = 'block';
    document.getElementById("other").style.display = 'none';



  } else {
    document.getElementById("strField").style.display = 'none';
    document.getElementById("other").style.display = 'block';

  }
}


function updateValue(e) {
  var x = document.createElement("TEXTAREA");
  x.setAttribute("class", "materialize-textarea");
  x.setAttribute("id", "stepsToRepro" + amtOfSteps);
  x.setAttribute("data-length", "75");
  x.setAttribute("maxlength", "75");
  x.addEventListener("input", updateValue);

  document.getElementById("steps").appendChild(x);

  $(document).ready(function() {
    $("textarea#stepsToRepro" + (amtOfSteps - 1)).characterCounter();
  });

  document.getElementById("stepsToRepro" + (amtOfSteps - 1)).removeEventListener("input", updateValue);

  amtOfSteps++;
}

function callbackSTR() {
  for (let i = 1; i < amtOfSteps - 1; i++) {
    if (document.getElementById("stepsToRepro" + i).value == "") {
      document.getElementById("stepsToRepro" + (i + 1)).remove();
      document.getElementById("steps").getElementsByClassName("character-counter")[i - 1].remove();
      amtOfSteps--;

      const input = document.getElementById("stepsToRepro" + (amtOfSteps - 1));
      input.addEventListener("input", updateValue);
    }
  }
}


function myCallback() {
  var x = document.getElementById("command");
  x.innerHTML = "Missing ";

  if (document.getElementById("reportID").value == "") x.innerHTML += "Report ID, ";
  if (document.getElementById("newContent").value == "") x.innerHTML += "New content";

  if (x.innerHTML == "Missing " || document.getElementById("section").value == 2) {
    x.innerHTML = "!edit ";
    x.innerHTML += document.getElementById("reportID").value;

    if (document.getElementById("section").value == 1) x.innerHTML += " | short description | ";
    if (document.getElementById("section").value == 2) x.innerHTML += " | Steps to Reproduce | ";
    if (document.getElementById("section").value == 3) x.innerHTML += " | expected | ";
    if (document.getElementById("section").value == 4) x.innerHTML += " | actual | ";
    if (document.getElementById("section").value == 5) x.innerHTML += " | client | ";
    if (document.getElementById("section").value == 6) x.innerHTML += " | system | ";

    if (document.getElementById("section").value == 2) {
      for (let i = 1; i < amtOfSteps - 1; i++) {
        if (i == amtOfSteps - 2) x.innerHTML += document.getElementById("stepsToRepro" + i).value;
        else x.innerHTML += document.getElementById("stepsToRepro" + i).value + " - ";
      }

    } else x.innerHTML += document.getElementById("newContent").value;


  }
}