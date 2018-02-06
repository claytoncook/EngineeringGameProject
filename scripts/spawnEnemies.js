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
        new enemy(randomEnemy(), Math.round(Math.random() * 10), Math.round(Math.random() * 10))
    }
}
