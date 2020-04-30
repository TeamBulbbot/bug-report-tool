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
    alert("You must write something!");
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
  x.innerHTML = "Missing ";
  if (document.getElementById("shortDesc").value == "") x.innerHTML += "Short Description, ";
  if (steps.length == 0) x.innerHTML += "Steps to Reproduce, ";
  if (document.getElementById("expected").value == "") x.innerHTML += "Expected Result, ";
  if (document.getElementById("actual").value == "") x.innerHTML += "Actual Result, ";
  if (document.getElementById("clientVers").value == "") x.innerHTML += "Client Version, ";
  if (document.getElementById("systemVers").value == "") x.innerHTML += "System Settings";

  if (x.innerHTML == "Missing ") {
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
    var label = document.getElementById("resize");
    label.setAttribute("style", "width: 300px");
  }
}