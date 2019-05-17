var $ = require("./lib/qsa");

var audioPlayer = document.querySelector(".audio-clip");
console.log(audioPlayer);

audioPlayer.addEventListener("click", noise);

function noise() {
	var sound = document.getAttribute("data-audio");
	sound.play();
};

console.log(audioPlayer);


console.log(sound);

