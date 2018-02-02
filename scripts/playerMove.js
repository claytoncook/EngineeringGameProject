function move() {
    window.addEventListener('keydown', function (event) {
        if (event.keyCode === 87) {
            //up
            player.y -= player.speed;
        } else if (event.keyCode === 83) {
            //down
            player.y += player.speed;
        } else if (event.keyCode === 65) {
            //left
            player.x -= player.speed;
        } else if (event.keyCode === 68) {
            //right
            player.x += player.speed;
        }

        $player.style.top = player.y + 'px';
        $player.style.left = player.x + 'px';
    })
}