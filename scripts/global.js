//cache elements
var $game = document.querySelector('div#game'),
    $tileContainer = document.querySelector('div#tile-container'),
    $enemyContainer = document.querySelector('div#enemy-container');

//make height and width of tiles
var tileHeight;
var tileWidth;
tileHeight = tileWidth = 30;

//game object
var game = {
    height: 1080,
    width: 1920
}

//player variables
var $player = document.querySelector('div#player'),
    $fov = document.querySelector('div#fov');
var player = {
    height: 30,
    width: 30,
    x: 10,
    y: 10,
    speed: 30,
    hearts: 3
}

//bottom menu and stats
var $statHearts = document.querySelector('div#stat-hearts');
