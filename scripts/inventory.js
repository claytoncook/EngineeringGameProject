var storePlayersItems = [];

var inv = false;

function openInventory() {
    if (event.keyCode === 69 && inv === false) {
        $inventory.style.height = window.innerHeight + 'px'
        $fov.style.opacity = 0;
        inv = true
    } else if (event.keyCode === 69 && inv === true) {
        $inventory.style.height = 0 + 'px'
        $fov.style.opacity = 0.9;
        inv = false
    }
}