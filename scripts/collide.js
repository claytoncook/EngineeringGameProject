var collide = function(x, y) {
    if (0 < x|| x > window.innerWidth) {
        player.x = x;
    } else {
        player.x += player.speed;
    }
}