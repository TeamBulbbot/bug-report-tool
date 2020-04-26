$(document).ready(function () {
    $('.sidenav').sidenav();
});

let amtOfSteps = 2;

const input = document.getElementById('stepsToRepro1');
input.addEventListener('input', updateValue);

function updateValue(e) {
    var x = document.createElement("TEXTAREA")
    x.setAttribute("class", "materialize-textarea");
    x.setAttribute("id", "stepsToRepro" + amtOfSteps)
    x.addEventListener("input", updateValue);

    document.getElementById("steps").appendChild(x);
    document.getElementById("stepsToRepro" + (amtOfSteps - 1)).removeEventListener("input", updateValue);

    amtOfSteps++;
}

var intervalID = window.setInterval(myCallback, 1000);

function myCallback() {
    var x = document.getElementById("command")
    x.innerHTML = "Missing "
    if (document.getElementById("shortDesc").value == "") x.innerHTML += "Short Description, "
    if (amtOfSteps - 2 == 0) x.innerHTML += "Steps to Reproduce, "
    if (document.getElementById("expected").value == "") x.innerHTML += "Expected Result, "
    if (document.getElementById("actual").value == "") x.innerHTML += "Actual Result, "
    if (document.getElementById("clientVers").value == "") x.innerHTML += "Client Version, "
    if (document.getElementById("systemVers").value == "") x.innerHTML += "System Settings"

    if (x.innerHTML == "Missing ") {
        x.innerHTML = "!submit "
        x.innerHTML += document.getElementById("shortDesc").value + " | "// Short Desc
        x.innerHTML += "Steps to Reproduce: - "

        for (let i = 1; i < amtOfSteps - 1; i++) {
            if (i == amtOfSteps - 2) x.innerHTML += document.getElementById("stepsToRepro" + i).value
            else x.innerHTML += document.getElementById("stepsToRepro" + i).value + " - "
        }

        x.innerHTML += " Expected Result: "
        x.innerHTML += document.getElementById("expected").value

        x.innerHTML += " Actual Result: "
        x.innerHTML += document.getElementById("actual").value

        x.innerHTML += " Client Settings: "
        x.innerHTML += document.getElementById("clientVers").value

        x.innerHTML += " System Settings: "
        x.innerHTML += document.getElementById("systemVers").value

    }

}