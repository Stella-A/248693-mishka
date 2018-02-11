"use strict";

var ZOOM_VALUE = 17;
var ICON_IMAGE_SVG = "img/icon-map-pin.svg";
var ICON_IMAGE_PNG = "img/icon-map-pin.png";
var CONTENT = "<p class='contacts__info'>г. Санкт-Петербург,<br>ул. Большая Конюшенная,<br>д. 19/8, офис 101</p>";
var COORDS = {lat: 59.938734, lng: 30.323121};
var isIE11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));

var initMap = function () {
  var map = new google.maps.Map(document.getElementById("map"), {
    disableDefaultUI: true,
    zoom: ZOOM_VALUE,
    center: COORDS
  });

  var marker = new google.maps.Marker({
    position: COORDS,
    map: map,
    icon: {
      url: isIE11 ? ICON_IMAGE_PNG : ICON_IMAGE_SVG,
    }
  });

  var infoWindow = new google.maps.InfoWindow({
    content: CONTENT
  });

  marker.addListener("click", function(){
    infoWindow.open(map, marker);
  });
}
