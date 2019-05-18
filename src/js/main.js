require("./lib/social");
require("./lib/ads");
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
      return;
    }
  }
}

var button0 = document.querySelector("#btn0");
    button0.addEventListener("click", player0);
    function player0() {
        var audio0 = document.querySelector("#aud0");
        audio0.play();
    };
    var button1 = document.querySelector("#btn1");
    button1.addEventListener("click", player1);
    function player1() {
        var audio1 = document.querySelector("#aud1");
        audio1.play();
    };
    var button2 = document.querySelector("#btn2");
    button2.addEventListener("click", player2);
    function player2() {
        var audio2 = document.querySelector("#aud2");
        audio2.play();
    };
    var button3 = document.querySelector("#btn3");
    button3.addEventListener("click", player3);
    function player3() {
        var audio3 = document.querySelector("#aud3");
        audio3.play();
    };
    var button5 = document.querySelector("#btn5");
    button5.addEventListener("click", player5);
    function player5() {
        var audio5 = document.querySelector("#aud5");
        audio5.play();
    };
    var button6 = document.querySelector("#btn6");
    button6.addEventListener("click", player6);
    function player6() {
        var audio6 = document.querySelector("#aud6");
        audio6.play();
    };
    var button8 = document.querySelector("#btn8");
    button8.addEventListener("click", player8);
    function player8() {
        var audio8 = document.querySelector("#aud8");
        audio8.play();
    };
    var button9 = document.querySelector("#btn9");
    button9.addEventListener("click", player9);
    function player9() {
        var audio9 = document.querySelector("#aud9");
        audio9.play();
    };
    var button10 = document.querySelector("#btn10");
    button10.addEventListener("click", player10);
    function player10() {
        var audio10 = document.querySelector("#aud10");
        audio10.play();
    };
    var button11 = document.querySelector("#btn11");
    button11.addEventListener("click", player11);
    function player11() {
        var audio11 = document.querySelector("#aud11");
        audio11.play();
    };
    var buttonLA = document.querySelector("#btnLA");
    buttonLA.addEventListener("click", playerLA);
    function playerLA() {
        var audioLA = document.querySelector("#audLA");
        audioLA.play();
    };
    var buttonAlcor = document.querySelector("#btnAlcor");
    buttonAlcor.addEventListener("click", playerAlcor);
    function playerAlcor() {
        var audioAlcor = document.querySelector("#audAlcor");
        audioAlcor.play();
    };
    var buttonArrow = document.querySelector("#btnArrow");
    buttonArrow.addEventListener("click", playerArrow);
    function playerArrow() {
        var audioArrow = document.querySelector("#audArrow");
        audioArrow.play();
    };

window.addEventListener("scroll", debounce(onScroll, 500));
onScroll();




