//cache elements
var $tileContainer = document.querySelector('div#tile-container'),
    $grassTile = document.querySelector('div#grass-tile'),
    $player = document.querySelector('div#player');

var grassTile = function(x, y) {
    this.x = x;
    this.y = y;
    var newGrassTile = document.createElement('grasstile');
    $tileContainer.appendChild(newGrassTile);
    newGrassTile.style.left = x + 'px';
    newGrassTile.style.top = y + 'px';
}

function createTileMap() {
    var x = 0;
    var y = 0;
    for (i = 0; i < 2304; i++) {
        new grassTile(x, y);
        x += 30;
        if (x > 1920) {
            x = 0;
            y += 30;
        }
        console.log(x, y);
    }    
}

createTileMap();
