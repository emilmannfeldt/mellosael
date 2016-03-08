
function init() {
   var myLatLng = {lat: 59.106699, lng: 16.524678};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng,
    scrollwheel: false

  });
    


  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: 'images/loc.png'
  });
    
}
google.maps.event.addDomListener(window, 'load', init);