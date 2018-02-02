//decides wehter a tile is a water tile or a grass tile
var randomTile = function () {
    //finds a random number between 0 and 1
    var random = Math.random();

    if (random <= 0.1) {
        //if the random number at the top is less than or equal to 0.2 
        //make said tile a water tile
        return "watertile"
    } else if (random > 0.1) {
        //if the random number at the top is more than 0.2
        //make said tile a grass tile
        return "grasstile"
    }
}

//constructor function for creating all tiles
//the name parameter comes from the randomTile() function
//name decides what kind of tile it is
var tile = function (name, x, y) {
    this.x = x;
    this.y = y;

    var newTile = document.createElement(name);
    $tileContainer.appendChild(newTile);

    newTile.style.left = x + 'px';
    newTile.style.top = y + 'px';
}

//places the tiles so that it fills the tile container
function createTileMap() {
    spawnPlayer();
    //variables that hold the coordinates of the tile so they can be used in the for loop
    var x = 0;
    var y = 0;
    var tileset = [];
    for (i = 0; i < 2304; i++) {
        //make new tile using constructor function
        //uses the randomTile() function to determine what kind of tile will be placed
        new tile(randomTile(), x, y);
        x += tileWidth;
        if (x > 1890) {
            //if the a tile's x goes off the screen
            //make x zero, moving it all the way back to the right of the screen
            x = 0;
            //add a tile's height to y so that it wraps over and over
            y += tileHeight;
        }

    }
}