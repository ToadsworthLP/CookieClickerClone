// make some waves.
var milk = document.getElementById("milk"),
  waveWidth = 10,
  waveCount = Math.floor(window.innerWidth / waveWidth),
  docFrag = document.createDocumentFragment();

for (var i = 0; i < waveCount; i++) {
  var wave = document.createElement("div");
  wave.className += " wave";
  docFrag.appendChild(wave);
  wave.style.left = i * waveWidth + "px";
  wave.style.webkitAnimationDelay = (i / 100) + "s";
}

milk.appendChild(docFrag);