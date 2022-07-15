//make container
const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);




//make grid for pixels
const gridContainer = document.createElement('div');
        gridContainer.classList.add('gridContainer');
        gridContainer.style.display = 'grid';
        gridContainer.style.width = '500px';
        gridContainer.style.height = '500px';
        gridContainer.style.justifyContent = 'center';
        gridContainer.style.gap = '1px 1px';
        gridContainer.style.backgroundColor = 'red';
        gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';

        container.appendChild(gridContainer);

//make square 'pixels' to put into grid
function pixels(...args) {
    for (let i = 0; i < args; ++i) {
        const pixel = document.createElement('div');
              pixel.classList.add('pixel');
              pixel.style.height = 'auto';
              pixel.style.width = 'auto';
              pixel.style.backgroundColor = 'mintcream';
              gridContainer.appendChild(pixel);
              //change background color when hovering over pixel
              pixel.addEventListener('mouseenter', () => {
                pixel.style.backgroundColor = 'blue';
              })
              console.log(' pixel test');
    }
}
pixels(256);

//button recieves input from user to change nuber of pixels
function pixelNum() {
    const btnDiv = document.createElement('div');
    const pixelNumBtn = document.createElement('button');
          pixelNumBtn.classList.add('pixelNumBtn');
          pixelNumBtn.addEventListener('click', () => {
            let input = prompt('how many pixels?');

          });
          pixelNumBtn.textContent = 'pixel number';
          btnDiv.appendChild(pixelNumBtn);
          container.insertBefore(pixelNumBtn, gridContainer)
}
pixelNum();


