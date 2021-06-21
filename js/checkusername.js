function checkUsername() {
    var username = event.target.elements.username.value
    if (username.includes(" ") || username == "") {
        alert("Username must not contain spaces or be empty.")
    }
    // make requests
    // github
    /*
    var request = new XMLHttpRequest();
    request.open("GET", "https://github.com/" + username, false);
    request.send();
    request.onreadystatechange = function(){
        if (request.readyState === 4){
            if (request.status == 404) {
                document.getElementById("github").classList.remove("btn-primary");
                document.getElementById("github").classList.add("btn-danger");
            } else if (request.status == 200) {
                document.getElementById("github").classList.remove("btn-primary");
                document.getElementById("github").classList.add("btn-success");
            } else {
                document.getElementById("github").classList.remove("btn-primary");
                document.getElementById("github").classList.radd("btn-secondary");
            }
        }
    }
    */
    /*
    $.ajax({
        type: "GET",
        url: "https://github.com/" + username,
        dataType: html,
        crossDomain: true,
        success: function() {
            document.getElementById("github").classList.remove("btn-primary");
            document.getElementById("github").classList.add("btn-success");
        },
        error: function() {
            if (xhr.status == 404) {
                document.getElementById("github").classList.remove("btn-primary");
                document.getElementById("github").classList.add("btn-danger");
            }
        }
    })
    */
}