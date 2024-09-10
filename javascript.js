

let gridParent = document.querySelector(".container");
let inputBox = document.querySelector(".sizeInput");

CreateStartingGrid(16);

function CreateStartingGrid(gridSize) {

    let totalDivs = gridSize ** 2;
    let sizePer = 100 / gridSize;

    for (let i = 0; i < totalDivs; i++) {

        let newElement = document.createElement("div");
        newElement.classList.add("gridElement");
        newElement.style.height = `${sizePer}%`;
        newElement.style.width = `${sizePer}%`;
        newElement.addEventListener('mouseover', () => {

            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);

            newElement.style.backgroundColor = `rgb(${r},${g},${b})`;
            newElement.style.opacity -= "-0.1";

        });
        gridParent.appendChild(newElement)

    }
}

inputBox.addEventListener('change', () => ChangeGridSize(inputBox.value));

function ChangeGridSize(value) {

    if (value > 100) {
        alert("Number has to be lower than 100.");
        inputBox.value = '';
        return;
    }

    inputBox.value = '';
    while (gridParent.lastElementChild) {
        gridParent.removeChild(gridParent.lastElementChild);
    }

    CreateStartingGrid(value);
}

