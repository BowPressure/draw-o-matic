// Creates a JS variable tied to the field
const fieldTile = document.querySelector('.fieldTile');
let fieldValue = 16;
let color = "black";

function setField(value) {
    const fieldSize = value * value;

    document.getElementById("fieldValue").innerHTML = fieldValue;

    for (i = 0; i < fieldSize; i++) {
        const makeTile = document.createElement('tile');
        makeTile.setAttribute('class', 'tile');
        makeTile.addEventListener('mouseenter', canDraw)
        fieldTile.appendChild(makeTile);
    }

    fieldTile.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    fieldTile.style.gridTemplateRows = `repeat(${value}, 1fr)`;
}

function canDraw() {
    this.style.backgroundColor = color;
}

window.addEventListener("load", setField(fieldValue));