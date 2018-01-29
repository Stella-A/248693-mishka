'use strict';

function initMap() {
  var coords = {lat: 59.938734, lng: 30.323121};
  var map = new google.maps.Map(document.getElementById('map'), {
    disableDefaultUI: true,
    zoom: 17,
    center: coords
  });
  var marker = new google.maps.Marker({
    position: coords,
    map: map,
    icon: 'img/icon-map-pin.svg'
  });
}
