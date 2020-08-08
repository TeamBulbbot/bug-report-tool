/*!
 * Sanitize and encode all HTML in a user-submitted string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
var sanitizeHTML = function (str) {
	var temp = document.createElement("div");
	temp.textContent = str;
	return temp.innerHTML;
};

$(document).ready(function () {
	$(".modal").modal();
	$(".sidenav").sidenav();
});

var callback = window.setInterval(myCallback, 200);
function myCallback() {
	try {
		const snippet = document.getElementById("submitsnippet").value;
		document.getElementById("str").innerHTML = "";

		let first = snippet.split("-t");
		let title = first[1].split("-r");
		let step = title[1].split("-e");
		let expected = step[1].split("-a");
		let actual = expected[1].split("-c");
		let client = actual[1].split("-s");
		let system = client[1];

		document.getElementById("title").textContent = title[0];

		let steps = step[0].split("~");
		for (let i = 0; i < steps.length; i++) {
			var div = document.getElementById("str");
			var p = document.createElement("p");
			p.innerHTML = sanitizeHTML("- " + steps[i]);
			//p.className = "text";

			if (getCookie("theme") === null) {
				setCookie("theme", "dark", 365);
			}

			if (getCookie("theme") === "dark") p.style.color = "#ffffff";
			else if (getCookie("theme") === "white") p.style.color = "#000000";

			div.appendChild(p);
		}

		document.getElementById("expected").textContent = expected[0];
		document.getElementById("actual").textContent = actual[0];
		document.getElementById("client").textContent = client[0];
		document.getElementById("system").textContent = system;
	} catch (error) {}
}

function loadDarkTheme() {
	$("body").css("background-color", "#2c2f33");
	$("footer").css("color", "#959c97");
	$("label").css("color", "#959c97");
	$("li").css("color", "#959c97");
	$("input").css("color", "#ffffff");
	$("textarea").css("color", "#ffffff");
	$("h5").css("color", "#ffffff");

	$("#command").css("color", "#959c97");

	$("#strongThemed0").css("color", "#959c97");
	$("#strongThemed1").css("color", "#959c97");

	$(".modal-content").css("background-color", "#2c2f33");
	$(".modal-footer").css("background-color", "#2c2f33");
	$(".footerText").css("color", "#ffffff");

	$("#iconThemed0").css("color", "#ffffff");
	$("#iconThemed1").css("color", "#ffffff");
	$("#iconThemed2").css("color", "#ffffff");
	$("#iconThemed3").css("color", "#ffffff");

	$("#iconThemedWindows").css("color", "#ffffff");
	$("#iconThemedAndroid").css("color", "#ffffff");
	$("#iconThemediOS").css("color", "#ffffff");
	$("#iconThemedBrowswer").css("color", "#ffffff");

	$("#modalColor").css("background-color", "#2c2f33");

	$(".boldText").css("font-weight", 700);
	$(".boldText").css("color", "#ffffff");

	$(".fieldTitle").css("font-size", 15);
	$(".fieldTitle").css("color", "#646f6a");

	$(".fieldItem").css("font-size", 13);
	$(".fieldItem").css("color", "#ffffff");

	$(".text").css("color", "#ffffff");
	$("p").css("color", "#ffffff");

	$("#modelFooter").css("background-color", "#2c2f33");
	$("#footerText").css("color", "#ffffff");
}

function loadWhiteTheme() {
	$("body").css("background-color", "#ffffff");
	$("footer").css("color", "#000000");
	$("label").css("color", "#000000");
	$("li").css("color", "#000000");
	$("input").css("color", "#000000");
	$("textarea").css("color", "#000000");
	$("h5").css("color", "#000000");

	$("#command").css("color", "#000000");

	$("#strongThemed0").css("color", "#000000");
	$("#strongThemed1").css("color", "#000000");

	$(".modal-content").css("background-color", "#ffffff");
	$(".modal-footer").css("background-color", "#ffffff");
	$(".footerText").css("color", "#000000");

	$("#iconThemed0").css("color", "#000000");
	$("#iconThemed1").css("color", "#000000");
	$("#iconThemed2").css("color", "#000000");
	$("#iconThemed3").css("color", "#000000");

	$("#iconThemedWindows").css("color", "#000000");
	$("#iconThemedAndroid").css("color", "#000000");
	$("#iconThemediOS").css("color", "#000000");
	$("#iconThemedBrowswer").css("color", "#000000");

	$("#modalColor").css("background-color", "#ffffff");

	$(".boldText").css("font-weight", 700);
	$(".boldText").css("color", "#000000");

	$(".fieldTitle").css("font-size", 15);
	$(".fieldTitle").css("color", "#646f6a");

	$(".fieldItem").css("font-size", 13);
	$(".fieldItem").css("color", "#000000");

	$(".text").css("color", "#000000");
	$("p").css("color", "#000000");

	$("#modelFooter").css("background-color", "#ffffff");
	$("#footerText").css("color", "#000000");
}
