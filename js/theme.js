// Cookies
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function checkTheme() {
  if (getCookie("theme") === null) {
    setCookie("theme", "dark", 365);
    return;
  }

  if (getCookie("theme") === "dark") loadDarkTheme();
  else if (getCookie("theme") === "white") loadWhiteTheme();
  else console.error("[Themes] Fatal error occurred while loading theme!");
}

function switchTheme() {
  if (getCookie("theme") === "dark") {
    loadWhiteTheme();
    eraseCookie("theme");
    setCookie("theme", "white", 365);
  } else if (getCookie("theme") === "white") {
    loadDarkTheme();
    eraseCookie("theme");
    setCookie("theme", "dark", 365);
  } else console.error("[Themes] Fatal error occurred while loading theme!");
}

function updateConfig() {
  setConfigCookies("desktopConfig");
  setConfigCookies("androidConfig");
  setConfigCookies("iOSConfig");
  setConfigCookies("browserConfig");
}

function setConfigCookies(config) {
  if (getCookie(config) === null) {
    setCookie(config, document.getElementById(config).value, 365);
    return;
  }

  eraseCookie(config);
  setCookie(config, document.getElementById(config).value, 365);
}

function loadConfig(config) {
  document.getElementById("systemVers").value = getCookie(config);
}
