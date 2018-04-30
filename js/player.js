var player = {
    element: function () {
        return document.getElementById('player');
    },
    spawn: function () {
        var element = document.getElementById('tile-1-1');
        element.appendChild(player.constructor());
        player.element().style.backgroundImage = 'url(images/player-right.png)';
    },
    constructor: function () {
        var element = document.createElement('div');
        element.id = 'player';
        element.style.backgroundImage = 'url(images/player-right.png)';
        return element;
    },
    controls: function () {
        document.onkeydown = function () {
            var location = {};
            // get location data from current tile id
            if (event.keyCode >= 37 && event.keyCode <= 40) {
                location.id = player.element().parentElement.id;
                location.y = location.id.substring(location.id.indexOf('-') + 1, location.id.lastIndexOf('-'));
                location.x = location.id.substring(location.id.lastIndexOf('-') + 1, location.id.length);
                location.x = parseInt(location.x);
                location.y = parseInt(location.y);
                player.element().remove();
            }
            // update location data based of what key was pressed
            if (event.keyCode === 37 && location.x > 1) location.x--;
            else if (event.keyCode === 38 && location.y > 1) location.y--;
            else if (event.keyCode === 39 && location.x < config.width) location.x++;
            else if (event.keyCode === 40 && location.y < config.height) location.y++;
            // append player back into game with new location
            if (event.keyCode >= 37 && event.keyCode <= 40) {
                var id = 'tile-' + location.y + '-' + location.x;
                var element = document.getElementById(id);
                if (element.classList.contains('wall')) {
                    alert('Starting Over: You ran into a wall! Try not to do that this time...');
                    player.spawn();
                } else {
                    element.appendChild(player.constructor());
                }
                if (event.keyCode === 37) player.element().style.backgroundImage = 'url(images/player-left.png)';
                else if (event.keyCode === 39) player.element().style.backgroundImage = 'url(images/player-right.png)';
            }
            console.log(location)
        }
    }
}