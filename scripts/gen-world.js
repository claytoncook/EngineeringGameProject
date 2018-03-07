//places the tiles so that it fills the tile container
function createTileMap() {
    function randomTile() {
        //finds a random number between 0 and 1
        var random = Math.random();

        if (random <= 0.2) {
            //if the random number at the top is less than or equal to 0.2 
            //make said tile a water tile
            return "watertile"
        } else if (0.2 < random <= 0.6) {
            //if the random number at the top is more than 0.2
            //make said tile a grass tile
            return "grasstile"
        } else if (0.6 < random <= 1) {
            return "chesttile"
        }
    }

    spawnPlayer();

    //variables that hold the coordinates of the tile so they can be used in the for loop
    var x = 0;
    var y = 0;
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