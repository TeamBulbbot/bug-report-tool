/*!
 * Sanitize and encode all HTML in a user-submitted string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
var sanitizeHTML = function(str) {
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};


$(document).ready(function() {
  $(".modal").modal();
  $("select").formSelect();
  $("textarea#trelloReport, textarea#clientVers, textarea#systemVers").characterCounter();
  $(".dropdown-trigger").dropdown();
  $(".sidenav").sidenav();

  localStorage.setItem("theme", "dark");
});

var intervalID = window.setInterval(myCallback, 1000);




function myCallback() {
  var x = document.getElementById("command");
  x.innerHTML = "Missing ";

  if (document.getElementById("trelloReport").value == "") x.innerHTML += "Trello Link or Report ID, ";
  if (document.getElementById("clientVers").value == "") x.innerHTML += "Client Version, ";
  if (document.getElementById("systemVers").value == "") x.innerHTML += "System Settings";
  document.getElementById("copy").disabled = true;

  if (x.innerHTML == "Missing ") {
    document.getElementById("copy").disabled = false;
    x.innerHTML = "!";
    if (document.getElementById("crOrCNR").value == 1) x.innerHTML += "canrepro ";
    else x.innerHTML += "cannotrepro ";

    x.innerHTML += sanitizeHTML(document.getElementById("trelloReport").value);

    x.innerHTML += " | ";
    x.innerHTML += sanitizeHTML(document.getElementById("clientVers").value);
    x.innerHTML += ", "
    x.innerHTML += sanitizeHTML(document.getElementById("systemVers").value);
  }
}

var x = window.matchMedia("(max-width: 686px)");
resize(x);
x.addListener(resize);

function resize(x) {
  if (x.matches) {
    var label = document.getElementById("txtLabel");
    label.setAttribute("style", "width: 200px");
  }
}

function switchTheme() {
  if (localStorage.getItem("theme") === "dark") {
    loadWhiteTheme();
    localStorage.setItem("theme", "white");
  } else if (localStorage.getItem("theme") === "white") {
    loadDarkTheme();
    localStorage.setItem("theme", "dark");
  } else {
    console.error("[Themes] Fatal error occurred while loading theme!");
  }
}

function loadATheme() {
  if (localStorage.getItem("theme") === "white") {
    loadWhiteTheme();
  } else if (localStorage.getItem("theme") === "dark") {
    loadDarkTheme();
  } else {
    console.error("[Themes] Fatal error occurred while loading theme!");
  }
}

function loadWhiteTheme() {
  $('body').css("background-color", "#ffffff");
  $('footer').css("color", "#000000");
  $('label').css("color", "#000000");
  $('li').css("color", "#000000");
  $('h5').css("color", "#000000");
  $('input').css("color", "#000000");
  $('textarea').css("color", "#000000");


  $('#strongThemed0').css("color", "#000000");
  $('#strongThemed1').css("color", "#000000");

  $('#command').css("color", "#000000");

  $('#iconThemed0').css("color", "#000000");
  $('#iconThemed1').css("color", "#000000");
  $('#iconThemed2').css("color", "#000000");
  $('#iconThemed3').css("color", "#000000");
  $('#iconThemed4').css("color", "#000000");

  $('#modalColor').css("background-color", "#ffffff");

  $('.boldText').css("font-weight", 700);
  $('.boldText').css("color", "#000000");

  $('.text').css("color", "#000000");

  $('.settings').css("background-color", "#333740");
  $('.settings').css("color", "#ffffff");
  $('.settings').css("padding", "3px");

  $('#modelFooter').css("background-color", "#ffffff");
  $('#footerText').css("color", "#000000");

}

function loadDarkTheme() {
  $('body').css("background-color", "#2c2f33");
  $('footer').css("color", "#959c97");
  $('label').css("color", "#959c97");
  $('li').css("color", "#959c97");
  $('h5').css("color", "#ffffff");
  $('input').css("color", "#ffffff");
  $('textarea').css("color", "#ffffff");

  $('#strongThemed0').css("color", "#959c97");
  $('#strongThemed1').css("color", "#959c97");

  $('#command').css("color", "#959c97");

  $('#iconThemed0').css("color", "#ffffff");
  $('#iconThemed1').css("color", "#ffffff");
  $('#iconThemed2').css("color", "#ffffff");
  $('#iconThemed3').css("color", "#ffffff");
  $('#iconThemed4').css("color", "#ffffff");

  $('#modalColor').css("background-color", "#2c2f33");

  $('.boldText').css("font-weight", 700);
  $('.boldText').css("color", "#ffffff");

  $('.text').css("color", "#ffffff");

  $('.settings').css("background-color", "#23272a");
  $('.settings').css("color", "#ffffff");
  $('.settings').css("padding", "3px");

  $('#modelFooter').css("background-color", "#2c2f33");
  $('#footerText').css("color", "#ffffff");

}