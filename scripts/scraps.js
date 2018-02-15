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

moveEnemy(this.enemy);
