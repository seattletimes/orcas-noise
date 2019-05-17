require("./lib/social");
require("./lib/ads");
//require("./lib/coral");
require("./bc-preroll");
require("./eloc");

//require("./lib/comments");
var paywall = require("./lib/paywall");
setTimeout(() => paywall(11006469), 3000);
var track = require("./lib/tracking");


var $ = require("./lib/qsa");
var debounce = require("./lib/debounce");
var Camera = require("savage-camera");
var savage = require("savage-query");
var keyStage = document.querySelector(".scroll-content");
var map = document.querySelector(".backdrop svg");
var audio = document.querySelector(".scroll-content audio");
var camera = new Camera(map);
var stages = $(".layer").reverse();
var current = null;
var existing = document.querySelector("#Existing");

var onScroll = function() {
  var scrollBounds = keyStage.getBoundingClientRect();
  for (var i = 0; i < stages.length; i++) {
    var stage = stages[i];
    
    var bounds = stage.getBoundingClientRect();
    if (bounds.top < window.innerHeight && bounds.bottom > 0) {
      var layerID = stage.getAttribute("data-layer");
      console.log(current);
      if (layerID == current) return;
      var layer = document.querySelector("#" + layerID);
      if (!layer) return;
      if (layerID != "Existing") {
        savage(map).addClass("zoomed");
      } else {
        savage(map).removeClass("zoomed");
      }

      var active = document.querySelector(".activated");
      if (active) savage(active).removeClass("activated");
      savage(layer).addClass("activated");
      current = layerID;
      camera.zoomTo(layer, window.innerWidth > 1000 ? 200 : 50, 500);
      
      audio.autoplay();
      audio.load();

      
      
      return;
    }
  }
}

window.addEventListener("scroll", debounce(onScroll, 500));
onScroll();

