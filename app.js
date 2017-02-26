var map = L.map('map', {
    center: [39.73, -104.99],
    zoom: 100,
});

var Thunderforest_OpenCycleMap = L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}', {
  attribution: '',
  maxZoom: 22,
  apikey: '525c75c271844aa0b88a3eb8ebb9d116'
}).addTo(map);

map.attributionControl.setPrefix('');

var layer = omnivore.kml("data/newspaper0.kml")
  .on('ready', function(e) {
    map.fitBounds(e.target.getBounds());
  })
  .on('error', function() {
      console.log("bar")
      // fired if the layer can't be loaded over AJAX
      // or can't be parsed
  })
  .addTo(map);

map.addControl(new L.Control.Layers({}, {'newspapers':layer}));

map.locate({setView: true, maxZoom: 16});

map.on('locationfound', function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
});

map.on('locationerror', function onLocationError(e) {
    alert(e.message);
});
