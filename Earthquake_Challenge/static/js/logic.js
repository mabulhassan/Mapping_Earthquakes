// Add console.log to check to see if our code is working.
console.log("working");

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})

L.circle([34.0522, -118.2437], {
    radius: 100
 }).addTo(map);
 
let airportData = "https://github.com/mabulhassan/Mapping_Earthquakes/blob/dev/Simple_Map/majorAirports.json";
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {

color:"#ffffa1",
weight: 2,
onEachFeature: function(feature, Layer){
Layer.bindPopup("<h3> Airline:" +feature.properites.airline+"</h3><hr><h3> Distination:"
+feature.properites.dst + "</h3>");

}
    
  }).addTo(map);
});
// Create a base layer that holds both maps.
let torontoData = "https://github.com/mabulhassan/Mapping_Earthquakes/blob/dev/Simple_Map/torontoRoutes.json";
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});
let torontoHoods = "https://github.com/mabulhassan/Mapping_Earthquakes/blob/dev/Simple_Map/torontoNeighborhoods.json";
let baseMaps = {
    Street: streets,
    Dark: dark
  };
  d3.json(torontoData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});
  // Create the map object with a center and zoom level.
  L.control.layers(baseMaps).addTo(map);
  // Create the map object with center, zoom level and default layer.

// An array containing each city's location, state, and population.
let cities = [{
    location: [40.7128, -74.0059],
    city: "New York City",
    state: "NY",
    population: 8398748
  },
  {
    location: [41.8781, -87.6298],
    city: "Chicago",
    state: "IL",
    population: 2705994
  },
  {
    location: [29.7604, -95.3698],
    city: "Houston",
    state: "TX",
    population: 2325502
  },
  {
    location: [34.0522, -118.2437],
    city: "Los Angeles",
    state: "CA",
    population: 3990456
  },
  {
    location: [33.4484, -112.0740],
    city: "Phoenix",
    state: "AZ",
    population: 1660272
  }
  ];
  cityData.forEach(function(city) {
    console.log(city)
    L.marker(city.location)
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
  .addTo(map);
});
let line = [
    [33.9416, -118.4085],
    [37.6214, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];
  L.polyline(line, {
    color: "yellow"
  }).addTo(map);
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
