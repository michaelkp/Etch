const container = document.querySelector('#container');
const grid = document.querySelector('#grid');


let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    //pixel.addEventListener('mouseover', () => {
        //pixel.classList.add('drawColor');
    //})
    grid.appendChild(pixel);

function drawPixels(...args) {
    for(let i = 0; i < args; i++) {
        let drawPix = document.createElement('div');
        drawPix.classList.add('pixel');
        drawPix.addEventListener('mouseover', () => {
            drawPix.classList.add('drawColor');
            console.log('pix test')
        })
        grid.appendChild(drawPix)
    }
}
drawPixels(256);

function randomColor() {
    let randomColorBG = '#'+Math.floor(Math.random()*16777215).toString(16);
    let randomPixelColor = document.getElementsByClassName('pixel');
        
    for(let i = 0; i < randomPixelColor.length; i++) {
        randomPixelColor[i].addEventListener('mouseover', () => {
            randomPixelColor[i].classList.remove('drawColor');
            randomPixelColor[i].classList.add('randomPixelColor');
            randomPixelColor[i].style.backgroundColor = randomColorBG;
        })
    }
}


function randomColorBtn() {
    const randomColorBtn = document.createElement('button');
        randomColorBtn.textContent = 'Random Colors';
        container.insertBefore(randomColorBtn, grid);
        randomColorBtn.addEventListener('click', randomColor);
}
randomColorBtn();

function resetPixels() {
    const resetDraw = document.getElementsByClassName('drawColor');
    
    while(resetDraw.length) {
        resetDraw[0].classList.remove('drawColor');
        console.log(resetDraw[0] + 'resetdraw teest')
    }
    const resetRandomColor = document.getElementsByClassName('randomPixelColor');

    while(resetRandomColor.length) {
        resetRandomColor[0].style.backgroundColor = 'mintcream';
        resetRandomColor[0].classList.remove('randomPixelColor');
        
        console.log(resetRandomColor[0] + ' remove test')
    }
}


function resetGrid() {
    grid.style.gridTemplateColumns = 'repeat(16, 1fr)';
    grid.style.gridTemplateRows = 'repeat(16, 1fr)';  
}

function resetBtn() {
    const resetColorsBtn = document.createElement('button');
    const resetGridBtn = document.createElement('button');
    
    resetColorsBtn.textContent = 'Reset Colors';
    resetGridBtn.textContent = 'Reset Grid';

    resetColorsBtn.addEventListener('click', resetPixels);
    resetGridBtn.addEventListener('click', resetGrid);

    container.insertBefore(resetColorsBtn, grid);
    container.insertBefore(resetGridBtn, grid);
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

