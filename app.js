var map = L.map('map', {
    center: [39.73, -104.99],
    zoom: 100,
});

L.tileLayer.provider('Thunderforest.OpenCycleMap').addTo(map);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 10
    }).addTo(map);

map.attributionControl.setPrefix(''); // Don't show the 'Powered by Leaflet' text.


var layer = omnivore.kml("newspaper.kml")
  .on('ready', function(e) {
    b = e.target.getBounds()
    map.fitBounds(e.target.getBounds());
    debugger
  })
  .on('error', function() {
      console.log("bar")
      // fired if the layer can't be loaded over AJAX
      // or can't be parsed
  })
  .addTo(map);

map.addControl(new L.Control.Layers({}, {'newspapers':layer}));
//kmlLayer = new L.KML("public_libraries.kml", {async:true});
//
//kmlLayer.on("loaded", function(e) {
//  console.log("loaded kml");
//});

//map.addLayer(kmlLayer);
//map.addControl(new L.Control.Layers({}, {'publibs':kmlLayer}));


//
//$.get("newspapers.kml", {}, function(k) {
//  console.log(k)
//  var layer = omnivore.kml.parse(k+"").addTo(map);
//  //.on('ready', function(e) {
//  //    console.log("foo", e)
//      // when this is fired, the layer
//      // is done being initialized
//  //    map.fitBounds(e.target.getBounds());
//  //})
//  //.on('error', function() {
//  //    console.log("bar")
//  //    // fired if the layer can't be loaded over AJAX
//  //    // or can't be parsed
//  //})
//  //.addTo(map);
//  map.addLayer(layer);
//  map.addControl(new L.Control.Layers({}, {'publibs':layer}));
//});
//////kmlLayer = new L.KML("public_libraries.kml", {async:true});
//////
//////kmlLayer.on("loaded", function(e) {
//////  console.log("loaded kml");
//////});
////
//////map.addLayer(kmlLayer);
//////map.addControl(new L.Control.Layers({}, {'publibs':kmlLayer}));
////
////
