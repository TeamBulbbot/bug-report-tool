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
  $(".sidenav").sidenav();
  $(".modal").modal();
  $("select").formSelect();
  $("textarea#shortDesc, textarea#expected, textarea#actual, textarea#clientVers, textarea#systemVers").characterCounter();
  $(".dropdown-trigger").dropdown();

  localStorage.setItem("theme", "dark");
});

var callback = window.setInterval(myCallback, 200);



document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems);
});

document.addEventListener("DOMContentLoaded", function() {
  var textNeedCount = document.querySelectorAll("#shortDesc");
  M.CharacterCounter.init(textNeedCount);
});


// Create a "close" button and append it to each list item
var steps = document.getElementsByClassName("collection-item");
var i;
for (i = 0; i < steps.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  steps[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.remove()
  }
}



// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  li.setAttribute("class", "collection-item")
  li.setAttribute("style", "background-color: transparent; border:none")

  var inputValue = document.getElementById("str").value;
  var t = document.createTextNode(" - " + inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Steps to Reproduce cannot be empty!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("str").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode(" \u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove()
    }
  }
}


function myCallback() {
  var x = document.getElementById("command");
  let missing = "Missing "
  if (document.getElementById("shortDesc").value == "") missing += "Short-Description#";
  if (steps.length == 0) missing += "Steps-to-Reproduce#";
  if (document.getElementById("expected").value == "") missing += "Expected-Result#";
  if (document.getElementById("actual").value == "") missing += "Actual-Result#";
  if (document.getElementById("clientVers").value == "") missing += "Client-Version#";
  if (document.getElementById("systemVers").value == "") missing += "System-Settings#";

  missing = missing.split("#").join(", ");
  missing = missing.split("-").join(" ")
  missing = missing.substring(0, missing.length - 2);
  x.innerHTML = missing;


  document.getElementById("copy").disabled = true;

  if (x.innerHTML == "Missin") {
    document.getElementById("copy").disabled = false;
    x.innerHTML = "!submit ";
    x.innerHTML += sanitizeHTML(document.getElementById("shortDesc").value + " | "); // Short Desc
    x.innerHTML += "Steps to Reproduce: ";

    for (let i = 0; i < steps.length; i++) {
      var lis = document.getElementById("myUL").getElementsByTagName("li");
      x.innerHTML += sanitizeHTML((lis[i].textContent).replace("×", ""))
    }

    x.innerHTML += " Expected Result: ";
    x.innerHTML += sanitizeHTML(document.getElementById("expected").value);

    x.innerHTML += " Actual Result: ";
    x.innerHTML += sanitizeHTML(document.getElementById("actual").value);

    x.innerHTML += " Client Settings: ";
    x.innerHTML += sanitizeHTML(document.getElementById("clientVers").value);

    x.innerHTML += " System Settings: ";
    x.innerHTML += sanitizeHTML(document.getElementById("systemVers").value);
  }
}

var x = window.matchMedia("(max-width: 686px)");
resize(x);
x.addListener(resize);

function resize(x) {
  if (x.matches) {
    var col = document.getElementsByClassName("input-field col s6");
    for (var i = 0; i < col.length; i++) {
      col[i].setAttribute("style", "width: 250px")
    }

    var helperText = document.getElementsByClassName("helper-text");
    for (var i = 0; i < helperText.length; i++) {
      helperText[i].setAttribute("style", "width: 200px; color: #9e9e9e");
    }
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

function loadWhiteTheme() {
  $('body').css("background-color", "#ffffff");
  $('footer').css("color", "#000000");
  $('label').css("color", "#000000");
  $('span').css("color", "#000000");
  $('li').css("color", "#000000");
  $('h5').css("color", "#000000");
  $('p').css("color", "#000000");
  $('textarea').css("color", "#000000");

  $('#strongThemed1').css("color", "#000000");
  $('#strongThemed2').css("color", "#000000");

  $('#command').css("color", "#000000");

  $('#iconThemed0').css("color", "#000000");
  $('#iconThemed1').css("color", "#000000");
  $('#iconThemed2').css("color", "#000000");
  $('#iconThemed3').css("color", "#000000");
  $('#iconThemed4').css("color", "#000000");
  $('#iconThemed5').css("color", "#000000");
}

function loadDarkTheme() {
  $('body').css("background-color", "#2c2f33");
  $('footer').css("color", "#959c97");
  $('label').css("color", "#959c97");
  $('span').css("color", "#959c97");
  $('li').css("color", "#959c97");
  $('h5').css("color", "#ffffff");
  $('input').css("color", "#ffffff");
  $('option').css("color", "#ffffff");
  $('p').css("color", "#ffffff");
  $('textarea').css("color", "#ffffff");

  $('#strongThemed1').css("color", "#959c97");
  $('#strongThemed2').css("color", "#959c97");

  $('#command').css("color", "#959c97");

  $('#iconThemed0').css("color", "#ffffff");
  $('#iconThemed1').css("color", "#ffffff");
  $('#iconThemed2').css("color", "#ffffff");
  $('#iconThemed3').css("color", "#ffffff");
  $('#iconThemed4').css("color", "#ffffff");
  $('#iconThemed5').css("color", "#ffffff");
}