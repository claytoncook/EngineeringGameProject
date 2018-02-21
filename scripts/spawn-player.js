var spawnPlayer = function () {
    //center player's position
player.x = 0;
player.y = 0;

$player.style.top = player.y + 'px';
$player.style.left = player.x + 'px';

//bind the fov to the player
$player.appendChild($fov);

for(i = 0; i < player.hearts; i++) {
    var newHeart = document.createElement('heart');
    $statHearts.appendChild(newHeart);
}
}