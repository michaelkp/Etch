let input = ''; //set global variable

//make container
const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);

//make grid for pixels
const gridContainer = document.createElement('div');
        gridContainer.classList.add('gridContainer');
        gridContainer.style.display = 'grid';
        gridContainer.style.width = '600px';
        gridContainer.style.height = '600px';
        gridContainer.style.justifyContent = 'center';
        //gridContainer.style.gap = '1px 1px';
        gridContainer.style.backgroundColor = 'red';
        gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
        gridContainer.style.gridTemplateRows = 'repeat(16, 1fr)';

        container.appendChild(gridContainer);

//make square 'pixels' to put into grid
function pixels(...args) {

    for (let i = 0; i < args; ++i) {
        const pixel = document.createElement('div');
              pixel.classList.add('pixel');
              pixel.style.height = 'auto';
              pixel.style.width = 'auto';
              pixel.style.margin = '0';
              pixel.style.boxShadow = '0px 0px 1px 0px teal'
              pixel.style.backgroundColor = 'mintcream';
              gridContainer.appendChild(pixel);
              //change background color when hovering over pixel
              pixel.addEventListener('mouseenter', () => {
                pixel.style.backgroundColor = 'blue';
              })
    }
}
pixels(256);


//get user input to change number of pixels on grid
function userInput() {
    input = prompt('how many pixels?');
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


//button recieves input from user to change number of pixels
function pixelNum() {
    
    const btnDiv = document.createElement('div');
    const pixelNumBtn = document.createElement('button');
          pixelNumBtn.classList.add('pixelNumBtn');

         
          pixelNumBtn.addEventListener('click', () => {
            userInput();// get user input
            console.log(input + ' input test')
            //change grid rows and cols
            gridContainer.style.gridTemplateColumns = 'repeat('+input+', 1fr)';
            console.log(input + 'cols input test')
            gridContainer.style.gridTemplateRows = 'repeat('+input+', 1fr)';
            pixels(input * input);//change amount of pixels
          });

          pixelNumBtn.textContent = 'pixel number';
          btnDiv.appendChild(pixelNumBtn);
          container.insertBefore(pixelNumBtn, gridContainer)
}
pixelNum();



