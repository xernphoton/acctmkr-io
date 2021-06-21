var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

var github = getUrlParameter("github");
var twitter = getUrlParameter("twitter");
var facebook = getUrlParameter("facebook");
var instagram = getUrlParameter("instagram");
var reddit = getUrlParameter("reddit");
var youtube = getUrlParameter("youtube");
var twitch = getUrlParameter("twitch");
// github
if (github == "available") {
    document.getElementById("github").classList.remove("btn-primary");
    document.getElementById("github").classList.add("btn-success");
}
if (github == "not-available") {
    document.getElementById("github").classList.remove("btn-primary");
    document.getElementById("github").classList.add("btn-danger");
}
if (github == "error") {
    document.getElementById("github").classList.remove("btn-primary");
    document.getElementById("github").classList.add("btn-secondary");
}
// twitter
if (twitter == "available") {
    document.getElementById("twitter").classList.remove("btn-primary");
    document.getElementById("twitter").classList.add("btn-success");
}
if (twitter == "not-available") {
    document.getElementById("twitter").classList.remove("btn-primary");
    document.getElementById("twitter").classList.add("btn-danger");
}
if (twitter == "error") {
    document.getElementById("twitter").classList.remove("btn-primary");
    document.getElementById("twitter").classList.add("btn-secondary");
}
// facebook
if (facebook == "available") {
    document.getElementById("facebook").classList.remove("btn-primary");
    document.getElementById("facebook").classList.add("btn-success");
}
if (facebook == "not-available") {
    document.getElementById("facebook").classList.remove("btn-primary");
    document.getElementById("facebook").classList.add("btn-danger");
}
if (facebook == "error") {
    document.getElementById("facebook").classList.remove("btn-primary");
    document.getElementById("facebook").classList.add("btn-secondary");
}
// instagram
if (instagram == "available") {
    document.getElementById("instagram").classList.remove("btn-primary");
    document.getElementById("instagram").classList.add("btn-success");
}
if (instagram == "not-available") {
    document.getElementById("instagram").classList.remove("btn-primary");
    document.getElementById("instagram").classList.add("btn-danger");
}
if (instagram == "error") {
    document.getElementById("instagram").classList.remove("btn-primary");
    document.getElementById("instagram").classList.add("btn-secondary");
}
// reddit
if (reddit == "available") {
    document.getElementById("reddit").classList.remove("btn-primary");
    document.getElementById("reddit").classList.add("btn-success");
}
if (reddit == "not-available") {
    document.getElementById("reddit").classList.remove("btn-primary");
    document.getElementById("reddit").classList.add("btn-danger");
}
if (reddit == "error") {
    document.getElementById("reddit").classList.remove("btn-primary");
    document.getElementById("reddit").classList.add("btn-secondary");
}
// youtube
if (youtube == "available") {
    document.getElementById("youtube").classList.remove("btn-primary");
    document.getElementById("youtube").classList.add("btn-success");
}
if (youtube == "not-available") {
    document.getElementById("youtube").classList.remove("btn-primary");
    document.getElementById("youtube").classList.add("btn-danger");
}
if (youtube == "error") {
    document.getElementById("youtube").classList.remove("btn-primary");
    document.getElementById("youtube").classList.add("btn-secondary");
}
// twitch
if (twitch == "available") {
    document.getElementById("twitch").classList.remove("btn-primary");
    document.getElementById("twitch").classList.add("btn-success");
}
if (twitch == "not-available") {
    document.getElementById("twitch").classList.remove("btn-primary");
    document.getElementById("twitch").classList.add("btn-danger");
}
if (twitch == "error") {
    document.getElementById("twitch").classList.remove("btn-primary");
    document.getElementById("twitch").classList.add("btn-secondary");
}