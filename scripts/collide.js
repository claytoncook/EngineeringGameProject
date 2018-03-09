var collide = function (x, y) {
    if (0 < x + player.width) {
        player.x = x;
        console.log(true)
    } else if (window.innerWidth <= x + player.width) {
        player.x = x;
        console.log(true)
    } else {
        player.x += player.speed;
    }
}