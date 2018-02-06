function spawnEnemies() {
    function randomEnemy() {
        //finds a random number between 0 and 1
        var random = Math.random();

        if (random <= 0.1) {
            //if the random number at the top is less than or equal to 0.2 
            //make said tile a water tile
            return "zombie"
        } else if (random > 0.1) {
            //if the random number at the top is more than 0.2
            //make said tile a grass tile
            return "skeleton"
        }
    }

    for(i = 0; i < 5; i++) {
        var min = Math.ceil(0);
        var max = Math.floor(36);
        var randomX = Math.floor(Math.random() * (max - min + 1)) * 30;
        var randomY = Math.floor(Math.random() * (max - min + 1)) * 30;
        new enemy(randomEnemy(), randomX, randomY);
    }
}
