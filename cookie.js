var cookies = 0;
var upgrades = 0;
var upgradePrice;
var username = "";


function clickCookie(){
	addCookies(1+upgrades);
};

function buyUpgrade(){
	if(cookies>upgradePrice){
		addCookies(-upgradePrice);
		upgrades++;
		upgradePrice = 100*(2**upgrades);
		document.getElementById("cost-text").innerHTML = upgradePrice+" Cookies";
	}else{
		alert("You don't have enough cookies!");
	}
}

function setCookies(count){
	var scoreText = document.getElementById("score");
	cookies = count;
	scoreText.innerHTML = cookies;
}

function addCookies(count){
	var scoreText = document.getElementById("score");
	cookies += count;
	scoreText.innerHTML = cookies;
}