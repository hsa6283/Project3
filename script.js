// Google Map
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 41.83499522155751, lng: -87.62702776810768 },
      zoom: 14,
    });
    var marker = new google.maps.Marker({
      position: { lat: 41.83499522155751, lng: -87.62702776810768 },
      map: map,
    });
    var addCircle = new google.maps.Circle({
      center: { lat: 41.83499522155751, lng: -87.62702776810768 },
      radius:100,
      strokeColor: "#00FF00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#00FF00",
      fillOpacity: 0.5,
      map: map,
    });
    var infowindow = new google.maps.InfoWindow({
      content: "<p>IIT</p>"
    });
    infowindow.open(map, marker);
  }
  window.initMap = initMap;
  