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

function resetBtn() {
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset Colors';
    resetBtn.addEventListener('click', resetPixels);
    container.insertBefore(resetBtn, grid);
}
resetBtn();