//will hold all tile sets
var world = [];

$game.style.width = game.width + 'px';
$game.style.height = game.height + 'px';


//creates the map using genWorld.js
createTileMap();
move();
