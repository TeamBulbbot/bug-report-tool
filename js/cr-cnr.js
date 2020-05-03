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