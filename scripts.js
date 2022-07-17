const container = document.querySelector('#container');
const grid = document.querySelector('#grid');
const defaultColor = '#0000ff';

let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    
    grid.appendChild(pixel);

function drawPixels(...args) {
    for(let i = 0; i < args; i++) {
        let drawPix = document.createElement('div');
        drawPix.classList.add('pixel');
        drawPix.addEventListener('mouseover', () => {
            drawPix.classList.add('drawColor')
            drawPix.style.backgroundColor = defaultColor;
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
    
}
randomColorBtn();

function deleteColors() {
    const resetDraw = document.getElementsByClassName('drawColor');
    
    while(resetDraw.length) {
        resetDraw[0].style.backgroundColor = 'mintcream';
        resetDraw[0].classList.remove('drawColor');
    }
    const resetRandomColor = document.getElementsByClassName('randomPixelColor');

    while(resetRandomColor.length) {
        resetRandomColor[0].style.backgroundColor = 'mintcream';
        resetRandomColor[0].classList.remove('randomPixelColor');
    }
}




function resetColor() {
    const resetRandomColor = document.getElementsByClassName('randomPixelColor');

    while(resetRandomColor.length) {
        resetRandomColor[0].style.backgroundColor = defaultColor;
        resetRandomColor[0].classList.remove('randomPixelColor');
    }
}

function resetGrid() {
    grid.style.gridTemplateColumns = 'repeat(16, 1fr)';
    grid.style.gridTemplateRows = 'repeat(16, 1fr)'; 
    resetColor();
    deleteColors(); 
    
}

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
    
    let newGridCols = grid;
    let newGridRows = grid;
    userInput();

    newGridCols.style.gridTemplateColumns = 'repeat('+input+', 1fr)';
    newGridRows.style.gridTemplateRows = 'repeat('+input+', 1fr)';   
    
    drawPixels(input * input);
    resetColor();
    deleteColors();    
}


function buttons() {
    const btns = document.createElement('div');
        btns.classList.add('btns');
        container.insertBefore(btns, grid);
    const deleteBtn = document.createElement('button');
    const resetGridBtn = document.createElement('button');
    const randomColorBtn = document.createElement('button'); 
    const newGridBtn = document.createElement('button');

    randomColorBtn.textContent = 'Random Colors';
    deleteBtn.textContent = 'Delete Colors';
    resetGridBtn.textContent = 'Reset Grid';
    newGridBtn.textContent = 'New Grid';

    deleteBtn.addEventListener('click', deleteColors);
    resetGridBtn.addEventListener('click', resetGrid);
    randomColorBtn.addEventListener('click', randomColor);
    newGridBtn.addEventListener('click', newGrid);


    btns.appendChild(randomColorBtn);
    btns.appendChild(resetGridBtn);
    btns.appendChild(deleteBtn);
    btns.appendChild(newGridBtn);

}
buttons();
