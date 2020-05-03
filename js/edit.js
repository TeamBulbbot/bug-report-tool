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
  $(".dropdown-trigger").dropdown();
  $("textarea#reportID, textarea#newContent, textarea#stepsToRepro1").characterCounter();
});

var intervalID = window.setInterval(myCallback, 1000);
var strInternval = window.setInterval(checkIfSTRISActive, 1000);



function checkIfSTRISActive() {
  if (document.getElementById("section").value == 2) {
    document.getElementById("strField").style.display = 'block';
    document.getElementById("other").style.display = 'none';



  } else {
    document.getElementById("strField").style.display = 'none';
    document.getElementById("other").style.display = 'block';

  }
}


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
  x.innerHTML = "Missing ";

  if (document.getElementById("reportID").value == "") x.innerHTML += "Report ID, ";
  if (document.getElementById("newContent").value == "") x.innerHTML += "New content";
  document.getElementById("copy").disabled = true;

  if (x.innerHTML == "Missing " || document.getElementById("section").value == 2) {
    document.getElementById("copy").disabled = false;
    x.innerHTML = "!edit ";
    x.innerHTML += sanitizeHTML(document.getElementById("reportID").value);

    if (document.getElementById("section").value == 1) x.innerHTML += " | short description | ";
    if (document.getElementById("section").value == 2) x.innerHTML += " | Steps to Reproduce | ";
    if (document.getElementById("section").value == 3) x.innerHTML += " | expected | ";
    if (document.getElementById("section").value == 4) x.innerHTML += " | actual | ";
    if (document.getElementById("section").value == 5) x.innerHTML += " | client | ";
    if (document.getElementById("section").value == 6) x.innerHTML += " | system | ";

    if (document.getElementById("section").value == 2) {
      for (let i = 0; i < steps.length; i++) {
        var lis = document.getElementById("myUL").getElementsByTagName("li");
        x.innerHTML += sanitizeHTML((lis[i].textContent).replace("×", ""))
      }

    } else x.innerHTML += sanitizeHTML(document.getElementById("newContent").value);


  }
}