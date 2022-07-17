const container = document.querySelector('#container');
const grid = document.querySelector('#grid');


let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.addEventListener('mouseenter', () => {
        pixel.classList.add('drawColor');
    })
    grid.appendChild(pixel);

function drawPixels(...args) {
    for(let i = 0; i < args; i++) {
        let drawPix = document.createElement('div');
        drawPix.classList.add('pixel');
        drawPix.addEventListener('mouseenter', () => {
            drawPix.classList.add('drawColor');
            console.log('pix test')
        })
        grid.appendChild(drawPix)
    }
}
drawPixels(256);

function resetPixels() {
    let reset = document.getElementsByClassName('drawColor');

    while(reset.length) {
        reset[0].classList.remove('drawColor');
    }
}

function resetGrid() {
    grid.style.gridTemplateColumns = 'repeat(16, 1fr)';
    grid.style.gridTemplateRows = 'repeat(16, 1fr)';  
}

function resetBtn() {
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset Colors';
    resetBtn.addEventListener('click', () => {
        resetPixels();
        resetGrid();
    });
    container.insertBefore(resetBtn, grid);
}
resetBtn();


function userInput() {
    input = prompt('Change grid size by entering a number between 16 and 100.');
    //user clicks cancel
    if (input == null) {
        return;
    }
    //check if input is a number
    while (isNaN(input)) {
        input = prompt('Please enter a number.');
        if (input == null) {
            return;
        }
    }
    //limit input to 100
    while (input < 16 || input > 100){
        input = prompt('Please enter a number from 16 - 100');
        if (input == null) {
            return;
        }
    }
}

function newGrid() {
    let newGridBtn = document.createElement('button');
        newGridBtn.textContent = 'New Grid';
    let newGridCols = grid;
    let newGridRows = grid;
        container.insertBefore(newGridBtn, grid);

        newGridBtn.addEventListener('click', () => {
            userInput();

            newGridCols.style.gridTemplateColumns = 'repeat('+input+', 1fr)';
            newGridRows.style.gridTemplateRows = 'repeat('+input+', 1fr)';   
            
            drawPixels(input * input);
          });
}
newGrid()