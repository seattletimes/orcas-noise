// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var dot = require("./lib/dot");
var $ = require("jquery");


var template = dot.compile(require("./_info.html"));

var qsa = s => Array.prototype.slice.call(document.querySelectorAll(s));

function resetNavigationButtons() {
	var selected = document.querySelector(".selected");
	var selectedIndex = selected ? options.indexOf(selected.id) : -1;
	$(".goto.back").toggleClass("disabled", selectedIndex == 0);
  $(".goto.next").toggleClass("disabled", selectedIndex == options.length - 1);
}

var options = Object.keys(window.data);

qsa(".st-group").forEach(function(group) {
  group.addEventListener("click", function(e) {
		var selectedIndex = options.indexOf(e.target.parentElement.id);
		document.querySelector(".details").innerHTML = template(data[e.target.parentElement.id]);
		$(".selected").removeClass("selected");
		$("." + options[selectedIndex]).addClass("selected");
		e.target.parentElement.classList.add("selected");

		resetNavigationButtons();
  });
});

qsa(".goto").forEach(function(btn) {
	btn.addEventListener("click", function(e) {
		var selected = document.querySelector(".selected");

		var selectedIndex = selected ? options.indexOf(selected.id) : -1;
		if (e.target.classList.contains("back")) {
			selectedIndex = Math.max(0, selectedIndex - 1);
		} else {
			selectedIndex = Math.min(options.length - 1, selectedIndex + 1);
		}

		document.querySelector(".details").innerHTML = template(data[options[selectedIndex]]);
    $(".selected").removeClass("selected");
		$("." + options[selectedIndex]).addClass("selected");
		
		resetNavigationButtons();
	});
});




