var cookies = 0;
var username = "";


function clickCookie(){
	var scoreText = document.getElementById("score");
	cookies += 1;
	scoreText.innerHTML = cookies;
};

function setCookies(count){
	var scoreText = document.getElementById("score");
	cookies = count;
	scoreText.innerHTML = cookies;
}

function makeParticle(xPos, yPos){
	var cookieParticle = document.createElement("img");
	cookieParticle.setAttribute("class", "cookieParticle");
	cookieParticle.setAttribute("id", "cookieParticle");
	cookieParticle.setAttribute("position", "absolute");
	cookieParticle.setAttribute("src", "cookie.png");
	cookieParticle.setAttribute("height", 50);
	cookieParticle.setAttribute("width", 50);
	cookieParticle.setAttribute("alt", "MiniCookie");
	moveDiv(xPos, yPos, cookieParticle);
	document.getElementById("particles").appendChild(cookieParticle);
	setTimeout(function(){cookieParticle.parentNode.removeChild(cookieParticle);}, 5000);
}

function moveDiv(xPos, yPos, div) {
  div.style.position = "absolute";
  div.style.left = (xPos+(div.style.width/2))+'px';
  div.style.top = (yPos+(div.style.height/2))+'px';
}