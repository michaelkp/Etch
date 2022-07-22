const container = document.querySelector('#container');
const gridContainer = document.querySelector('#gridContainer');
const grid = document.createElement('div');
      grid.classList.add('grid')

const gridHead = document.createElement('header');
      gridHead.classList.add('gridHead');

const defaultColor = '#0000ff';

let pixel = document.createElement('div');
    
    gridContainer.appendChild(grid);
    gridContainer.insertBefore(gridHead, grid);


function drawPixels(...args) {
    for(let i = 0; i < args; ++i) {
        let drawPix = document.createElement('div');
        drawPix.classList.add('pixel');
        
        drawPix.addEventListener('mouseover', () => {
            drawPix.classList.add('drawColor')
            drawPix.style.backgroundColor = defaultColor;
        })
        drawPix.addEventListener('mouseover', () => {
            colorChange();  
        })
        grid.appendChild(drawPix)
    }
}
drawPixels(256);

function colorChange() {
    const change = document.getElementsByClassName('pixel');
    for(let i = 0; i < change.length; i++) {
        change[i].addEventListener('mouseover', () => {
            change[i].classList.add('colorChange');
        })
    }
}

function randomColor() {
    
    //let randomColorBG = 
    let randomPixelColor = document.getElementsByClassName('pixel');
        
    for(let i = 0; i < randomPixelColor.length; i++) {
        randomPixelColor[i].addEventListener('mouseover', () => {
            randomPixelColor[i].classList.remove('drawColor');
            randomPixelColor[i].classList.add('randomPixelColor');
            randomPixelColor[i].style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);;
        })
    }
}




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
    const resetRandomColor = document.getElementsByClassName('pixel');
    const resetPixelColor = defaultColor;

    for(let i = 0; i < resetRandomColor.length; i++) {
        resetRandomColor[i].addEventListener('mouseover', () => {
            resetRandomColor[i].classList.remove('randomPixelColor');
            resetRandomColor[i].classList.add('drawColor')
            resetRandomColor[i].style.backgroundColor = resetPixelColor
        }) 
    }
}

function resetGrid() {
    grid.style.gridTemplateColumns = 'repeat(16, 1fr)';
    grid.style.gridTemplateRows = 'repeat(16, 1fr)';
    deleteColors(); 
 
    resetColor();
    
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
    const btns = document.createElement('span');
        btns.classList.add('btns');
        gridHead.appendChild(btns);
    const deleteBtn = document.createElement('button');
          deleteBtn.classList.add('gridBtn');
    const resetColorBtn = document.createElement('button');
          resetColorBtn.classList.add('gridBtn');
    const resetGridBtn = document.createElement('button');
          resetGridBtn.classList.add('gridBtn');
    const randomColorBtn = document.createElement('button'); 
          randomColorBtn.classList.add('gridBtn');
    const newGridBtn = document.createElement('button');
          newGridBtn.classList.add('gridBtn');

    randomColorBtn.textContent = 'Random Colors';
    resetColorBtn.textContent = 'Reset Color';
    deleteBtn.textContent = 'Delete Colors';
    resetGridBtn.textContent = 'Reset Grid';
    newGridBtn.textContent = 'New Grid';

    deleteBtn.addEventListener('click', deleteColors);
    resetColorBtn.addEventListener('click', resetColor);
    resetGridBtn.addEventListener('click', resetGrid);
    randomColorBtn.addEventListener('click', randomColor);
    newGridBtn.addEventListener('click', newGrid);


    btns.appendChild(randomColorBtn);
    btns.appendChild(resetColorBtn);
    btns.appendChild(newGridBtn);
    btns.appendChild(resetGridBtn);
    btns.appendChild(deleteBtn);
    

}
buttons();
