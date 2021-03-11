// Creates a JS variable tied to the field
const fieldTile = document.querySelector('.fieldTile');
const button = document.querySelector('.button');
const clearButton = document.querySelector('#clearButton');
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

function clearField() {
    const fieldSize = fieldValue * fieldValue;

    for (i = 0; i < fieldSize; i++) {
        let tile = document.querySelector('.tile');
        fieldTile.removeChild(tile);
    }

    setField(fieldValue);
}

function resizeField() {
    let newFieldValue = prompt("Enter a value between 1 and 64");

    newFieldValue = Math.round(newFieldValue);

    if (newFieldValue < 1 || newFieldValue > 64 || isNaN(newFieldValue)) {
        alert("You probably already know this, but you didn't follow the directions!")
        return;
    } else {
        const fieldSize = fieldValue * fieldValue;

        for (i = 0; i < fieldSize; i++) {
            let tile = document.querySelector('.tile');
            fieldTile.removeChild(tile);
        }

        fieldValue = newFieldValue;

        setField(fieldValue);

    }
}

window.addEventListener("load", setField(fieldValue));
sizeButton.addEventListener("click", resizeField);
clearButton.addEventListener("click", clearField);