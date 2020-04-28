$(document).ready(function() {
  $(".sidenav").sidenav();
  $(".modal").modal();
  $("select").formSelect();
  $(".dropdown-trigger").dropdown();
  $("textarea#reportID, textarea#newContent").characterCounter();
});

var intervalID = window.setInterval(myCallback, 1000);


function myCallback() {
  var x = document.getElementById("command");
  x.innerHTML = "Missing ";

  if (document.getElementById("reportID").value == "") x.innerHTML += "Report ID, ";
  if (document.getElementById("newContent").value == "") x.innerHTML += "New content";

  if (x.innerHTML == "Missing ") {
    x.innerHTML = "!edit ";
    x.innerHTML += document.getElementById("reportID").value;

    if (document.getElementById("section").value == 1) x.innerHTML += " | short description | ";
    if (document.getElementById("section").value == 2) x.innerHTML += " | Steps to Reproduce | ";
    if (document.getElementById("section").value == 3) x.innerHTML += " | expected | ";
    if (document.getElementById("section").value == 4) x.innerHTML += " | actual | ";
    if (document.getElementById("section").value == 5) x.innerHTML += " | client | ";
    if (document.getElementById("section").value == 6) x.innerHTML += " | system | ";

    x.innerHTML += document.getElementById("newContent").value;

  }
}