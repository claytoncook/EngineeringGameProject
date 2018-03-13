//places the tiles so that it fills the tile container
function createTileMap() {
    function randomTile() {
        //finds a random number between 0 and 1
        var random = Math.random();

        if (random < 0.2) {
            //if the random number at the top is less than or equal to 0.2 
            //make said tile a water tile
            return "watertile"
        } else if (random >= 0.2) {
            //if the random number at the top is more than 0.2
            //make said tile a grass tile
            return "grasstile"
        }
    }

    //variables that hold the coordinates of the tile so they can be used in the for loop
    var x = 0;
    var y = 0;

    var player = 1,
        enemies = 100;

    //spawn tiles
    //spawns tiles in rows
    for (i = 0; i <= (parseInt($game.style.height)/30); i++) {
        //holds a string, which refers back to a tile type, that is then used throughout this whole function
        var randomTileHolder = randomTile();
        //random number so the enemies don't spawn by each other
        var random = Math.random();
        //make new tile using constructor function
        //uses the randomTile() function to determine what kind of tile will be placed
        new tile(randomTileHolder, x, y);
        if (randomTileHolder === "grasstile" && enemies > 0 && random < 0.01) {
            //spawn enemies on a grasstile
            new enemy(randomEnemy(), x, y)
            enemies -= 1;
        } else if (randomTileHolder === "grasstile" && player > 0 && random < 0.02) {
            //spawn player on a grasstile
            spawnPlayer(1080, 0)
            player -= 1;
        }
        //make next tile next to last generated one
        x += tileWidth;
        if (x > (parseInt($game.style.width))) {
            //if the a tile's x goes off the screen
            //make x zero, moving it all the way back to the right of the screen
            x = 0;
            //add a tile's height to y so that it wraps over and over
            y += tileHeight;
        }
        randomTileHolder = undefined;
        console.log(true)
    }
}