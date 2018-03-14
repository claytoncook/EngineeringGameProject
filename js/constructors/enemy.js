function Enemy() {
    var image;
    var element = document.createElement('div');
    element.classList.add('enemy');
    if (Math.random() > 0.5) image = 'skeleton.png';
    else image = 'zombie.png';
    element.style.backgroundImage = 'url(images/' + image + ')';
    return element;
}