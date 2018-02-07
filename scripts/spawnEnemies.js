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

    for(i = 0; i < 10; i++) {
        var minX = Math.ceil(0);
        var maxX = Math.floor(63);
        var minY = Math.ceil(0);
        var maxY = Math.floor(35);

        var randomX = Math.floor(Math.random() * (maxX - minX + 1)) * 30;
        var randomY = Math.floor(Math.random() * (maxY - minY + 1)) * 30;
        new enemy(randomEnemy(), randomX, randomY);
    }
}
