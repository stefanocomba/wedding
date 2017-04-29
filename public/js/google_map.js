
// var google;

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);

  var myLatlng = new google.maps.LatLng(45.1072487,7.5783667);
  var chiesa = new google.maps.LatLng(45.0696558, 7.6972406);
  var ricevimento = new google.maps.LatLng(45.1517987,7.566556);
  // 39.399872
  // -8.224454

  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 11,

    // The latitude and longitude to center the map (always required)
    center: myLatlng,

    // How you would like to style the map.
    scrollwheel: false,
    styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
  };



  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using out element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // var addresses = ['Torino', 'Druento'];
  var markerChiesa = new google.maps.Marker({
    position: chiesa,
    map: map,
    title: 'Chiesa Santa Giulia',
    icon: 'images/loc.png'
  });

  var markerRicevimento = new google.maps.Marker({
    position: ricevimento,
    map: map,
    title: 'La Rubbianetta - Druento',
    icon: 'images/loc2.png'
  });

  var contentChiesa = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Chiesa Santa Giulia</h1>'+
  '<div id="bodyContent">'+
  '<p>In <b>Chiesa Santa Giulia</b> il caro amico e prete <b>Cristiano Ludovici</b> unirà in matrimonio Stefano e Veronica.</p>'+
  '<p>Contatti e aggiornamenti sulle attività della parrocchia: <a href="www.parrocchiasantagiulia.eu">Parrocchia Santa Giulia</a></p>'+
  '<p>Maggiori informazioni: <a href="https://it.wikipedia.org/wiki/Chiesa_di_Santa_Giulia_(Torino)">Chiesa Santa Giulia</a></p>'+
  '</div>'+
  '</div>';

  var contentRicevimento = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">La Rubbianetta</h1>'+
  '<div id="bodyContent">'+
  '<p>Situato all\'interno del <b>Parco naturale La Mandria</b>, cascina Rubbianetta è oggi ' +
  'un\'importante scuderia della regione e rappresenta un punto di riferimento per l\'equitazione mondiale vantando il ruolo di Centro Internazionale del Cavallo.</p>'+
  '<p>I neo sposi saranno lieti di festeggiare con parenti e amici presso questa location assaporando le delizie preparate da Krea Catering di Simona Bruno</p>'+
  '<p>Pagina Facebook: <a href="https://www.facebook.com/centrodelcavallo/">La Rubbianetta</a></p>'+
  '<p>Il nostro catering (da Mondovì): <a href="http://www.kreacatering.it/">Krea Catering</a></p>'+
  '<p>Maggiori informazioni: <a href="https://it.wikipedia.org/wiki/Parco_naturale_La_Mandria">Parco La Mandria</a></p>'+
  '</div>'+
  '</div>';

  var infowindowC = new google.maps.InfoWindow({
    content: contentChiesa
  });
  var infowindowR = new google.maps.InfoWindow({
    content: contentRicevimento
  });
  markerChiesa.addListener('click', function() {
    infowindowC.open(map, markerChiesa);
  });
  markerRicevimento.addListener('click', function() {
    infowindowR.open(map, markerRicevimento);
  });
}
google.maps.event.addDomListener(window, 'load', init);
