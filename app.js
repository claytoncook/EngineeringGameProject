//cache elements
var $tileContainer = document.querySelector('div#tile-container'),
    $player = document.querySelector('div#player');

//will hold all tile sets
var world = [];

//creates the map using genWorld.js
createTileMap();
