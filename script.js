// Creates a JS variable tied to the field
const fieldTile = document.querySelector('.fieldTile');
const button = document.querySelector('.button');
const colorButton = document.querySelectorAll('.colorButton');
const rainbowColors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"];
const colorInput = document.querySelector('#colorInput');
let rainbowSelection = 6;
let fieldValue = 16;
let color = "black";
let daVinci = 0;

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
    switch(color) {
        case "black":
            this.style.backgroundColor = "#000000";
            break;
        case "rainbow":
            if (rainbowSelection > 5) {
                rainbowSelection = 0;
            } else {
                rainbowSelection += 1;
            }
            this.style.backgroundColor = rainbowColors[rainbowSelection];
            break;
        case "random":
            this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            break;
        case "choose":
            this.style.backgroundColor = colorInput.value;
            break;
        case "eraser":
            this.style.backgroundColor = "#FFFFFF";
            break;
   }

   if (daVinci == 1) {
        alert("WOOOAAAH! Move over da Vinci, there's a new genius in town!");
        daVinci = 0;
    }

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

        if (fieldValue == 1) {
            daVinci = 1;
        } else {
            daVinci = 0;
        }

    }
}

function changeColor(event) {
    switch(event.target.id) {
        case "black":
            color = "black";
            break;
        case "rainbow":
            color = "rainbow";
            break;
        case "random":
            color = "random";
            break;
        case "choose":
            color = "choose";
            break;
        case "eraser":
            color = "eraser";
            break;
    }
}

window.addEventListener("load", setField(fieldValue));
colorButton.forEach(colorButton => colorButton.addEventListener('click', changeColor));
sizeButton.addEventListener("click", resizeField);
clearButton.addEventListener("click", clearField);