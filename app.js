//will hold all tile sets
var world = [];

$game.style.width = game.width + 'px';
$game.style.height = game.height + 'px';

//creates the map using genWorld.js
createTileMap();

//dev option
var dev = function(boolean) {
    if (boolean === false) {
        $fov.style.opacity = 0.1;
    }
}

dev(false);