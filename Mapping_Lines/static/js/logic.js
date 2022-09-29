
// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid").setView([36.1733, -120.1794], 5);
  
// Coordinates for each point to be used in the polyline.
let line = [
    [37.621270390228524, -122.37894467263907],
    [30.197471081830052, -97.66625634204505],
    [41.980168254952694, -87.90901936806792],
    [43.67750031334735, -79.62477678604289],
    [40.641213586539656, -73.77797736889998]
  ];
// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    color: "blue",
    weight: "4",
    dashArray: "10, 10"
 }).addTo(map);



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);