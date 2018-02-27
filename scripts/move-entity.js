function movePlayer() {
        if (event.keyCode === 87) {
            //up
            player.y -= player.speed;
        } else if (event.keyCode === 83) {
            //down
            player.y += player.speed;
        } else if (event.keyCode === 65) {
            //left
            player.x -= player.speed;
            //turn the actual player image to the left
            $player.style.backgroundImage = "url('images/player/player-left.png')";
        } else if (event.keyCode === 68) {
            //right
            player.x += player.speed;
            //turn the actual player image to the right
            $player.style.backgroundImage = "url('images/player/player-right.png')";
        }

        collide(player.x, player.y);

        $player.style.top = player.y + 'px';
        $player.style.left = player.x + 'px';
}

function moveEnemy(enemy) {
    var random = Math.round(Math.random() * 4);

    if (random <= 4) {
        enemy.style.top += enemy.style.height;
    } else if (random <= 3) {
        enemy.style.top -= enemy.style.height;
    } else if (random <= 2) {
        enemy.style.left += enemy.style.width;
    } else if (random <= 1) {
        enemy.style.left -= enemy.style.width;
    }
}

