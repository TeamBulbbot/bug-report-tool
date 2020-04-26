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
/*
!submit This is a Short Description |
Steps to Reproduce: - Step 1 - Step 2 - Step 3 - Step 4
Expected Result: This is a Expected Result
Actual Result: This is a Actual Result
Client Settings: This is a Client Version
System Settings: This is a System Settings
*/