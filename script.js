var home = document.querySelector("#mHome");
var apps = document.querySelector("#mApps");
var about = document.querySelector("#mAbout");
var message = document.querySelector("#message");

home.onmouseover = function() {
    message.style.visibility = "visible";
    message.innerHTML = "Bienvenue sur le site d'Aqua, sur ce site nous publions beaucoup de scripts, de services et de trucs qui existent déjà. Mais en mieux.";
};

home.onmouseout = function() {
    message.style.visibility = "hidden";
    message.innerHTML = "<br/>";
};

apps.onmouseover = function() {
    message.style.visibility = "visible";
    message.innerHTML = "Cliquez ici pour découvir nos épatantes applications !";
};

apps.onmouseout = function() {
    message.style.visibility = "hidden";
    message.innerHTML = "<br/>";
};

about.onmouseover = function() {
    message.style.visibility = "visible";
    message.innerHTML = "En savoir plus sur nous...";
};

about.onmouseout = function() {
    message.style.visibility = "hidden";
    message.innerHTML = "<br/>";
};