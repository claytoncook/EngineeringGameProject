//will hold all tile sets
var world = [];

$game.style.width = game.width + 'px';
$game.style.height = game.height + 'px';

//creates the map using genWorld.js
createTileMap();
spawnEnemies();

//event listener to move player around using w,a,s,d keys
window.addEventListener('keydown', function (event) {
    movePlayer()
});

//dev option
var dev = function(boolean) {
    if (boolean === false) {
        $fov.style.opacity = 0.1;
    }
}

dev(false);