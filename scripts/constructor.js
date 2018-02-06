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