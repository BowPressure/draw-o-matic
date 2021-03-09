const fieldTile = document.querySelector('.fieldTile');

function setField(value) {
    fieldTile.style.background = "#ff0000";
    const fieldSize = value * value;

    for (i = 0; i < fieldSize; i++) {
        const tile = document.createElement('tile');
        tile.setAttribute('class', 'tile');
        fieldTile.appendChild(tile);
    }

    fieldTile.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    fieldTile.style.gridTemplateRows = `repeat(${value}, 1fr)`;
}

window.addEventListener("load", setField(6));