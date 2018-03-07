var storePlayersItems = [];

var inv = false;

function openInventory() {
    if (event.keyCode === 69 && inv === false) {
        $inventory.style.height = 400 + 'px'
        inv = true
    } else if (event.keyCode === 69 && inv === true) {
        $inventory.style.height = 0 + 'px'
        inv = false
    }
}