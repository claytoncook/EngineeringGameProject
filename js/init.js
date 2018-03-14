(function() {
    // create game board
    var game = document.getElementById('game-container');
    for (var x = 1; x <= config.height; x++) {
        for (var y = 1; y <= config.width; y++) {
            game.appendChild(new Tile(x + '-' + y));
        }
    }
    // add player
    player.spawn();
    player.controls();
})();