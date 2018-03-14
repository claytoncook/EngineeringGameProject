function Tile(id) {
    var image, type, enemy;
    if (Math.random() > 0.25 || id === '1-1') {
        image = 'url(images/floor.png';
        type = 'floor';
        if (Math.random() > 0.95 && id !== '1-1') enemy = true;
    } else {
        image = 'url(images/wall.png';
        type = 'wall'
    }
    var tile = document.createElement('div');
    tile.style.height = (window.innerHeight / config.height) + 'px';
    tile.style.width = (window.innerWidth / config.width) + 'px';
    tile.style.backgroundImage = image;
    tile.classList.add('tile');
    tile.classList.add(type);
    tile.id = 'tile-' + id;
    if (enemy) tile.appendChild(new Enemy());
    return tile;
}