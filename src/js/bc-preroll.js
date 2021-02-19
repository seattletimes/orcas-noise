var $ = require("./lib/qsa");

var makePlayer = function(id) {
  return `
  <iframe src="//cdn.jwplayer.com/players/${id}-oNGue23q.html" width="100%" height="100%" frameborder="0" scrolling="auto" style="position:absolute;" allowfullscreen></iframe>
  `;
};

$(".bc-preroll").forEach(function(vidbox) {
  var id = vidbox.getAttribute("data-id");
  var replace = function() {
    vidbox.innerHTML = makePlayer(id);
    vidbox.removeEventListener("click", replace);
  };
  vidbox.addEventListener("click", replace);
});