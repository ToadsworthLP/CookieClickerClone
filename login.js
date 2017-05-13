//Loginfenster
var loginWindow = document.getElementById("login");

window.onload = function() {
    if(window.cookies==0){
    	loginWindow.style.display = "block";
    }
}

function closeLogin() {
    loginWindow.style.display = "none";
}

//Datenbankzeug
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send();
    }
}

function login(){
    var client = new HttpClient();
    client.get("login.php?username=" + document.getElementById("username").value + "&password=" + document.getElementById("password").value, function(response) {
        window.cookies = parseInt(response.split(",")[0])-1;
        window.clickCookie();
        window.username = document.getElementById("username").value;
        closeLogin();
    });
}

function save(){
    var client = new HttpClient();
    client.get("save.php?username=" + document.getElementById("username").value + "&cookies=" + window.cookies, function(response) {
        alert(response);
        location.reload();
    });
}