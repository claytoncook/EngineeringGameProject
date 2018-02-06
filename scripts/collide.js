var collide = function(x, y) {
    if (0 < x + player.width) {
        player.x = x;
    } else {
        player.x += player.speed;
    }
}