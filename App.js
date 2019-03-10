
//Creates a 20x20 grid and a Reset Button
function start() {
    var body = document.getElementsByTagName("BODY")[0];
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for(var i = 0; i < 20*20; i++) { //creates 20 nested 'div' elements for the grid
        const content = document.createElement('div');
        content.classList.add('grid-block');
        content.addEventListener('mouseover', () => { 
            content.classList.add('filled'); //fills the boxes when mouse is hovered over the square
        }); 
        grid.appendChild(content);
    }
    body.appendChild(grid);

    const btn = document.createElement('BUTTON'); //creates reset button
    btn.setAttribute("id", "reset");
    btn.addEventListener('click', reset);
    btn.textContent = 'Reset';
    body.appendChild(btn);

    document.documentElement.style.setProperty("--size", 20); //sets size of grid to 20
}

//Resets the board and asks user to enter new size
function reset() {
    const element= document.getElementsByClassName('grid');
    element[0].parentNode.removeChild(element[0]); //removes board
    var response = prompt("What size square grid would you like?", "20");
    createNew(response);
}

//Creates a new board with size that user as asked for
function createNew(size) {
    var body = document.getElementsByTagName("BODY")[0];
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for(var i = 0; i < size*size; i++) {
        const content = document.createElement('div');
        content.classList.add('grid-block');
        content.addEventListener('mouseover', () => {
            content.classList.add('filled');
        });
        grid.appendChild(content);
    }
    body.appendChild(grid);
    document.documentElement.style.setProperty("--size", size); //sets size of grid to what the user asked for
}


start(); //starts the program