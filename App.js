function start() {
    var body = document.getElementsByTagName("BODY")[0];
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for(var i = 0; i < 20*20; i++) {
        const content = document.createElement('div');
        content.classList.add('grid-block');
        content.addEventListener('mouseover', () => {
            content.classList.add('filled');
        });
        grid.appendChild(content);
    }
    body.appendChild(grid);

    const btn = document.createElement('BUTTON');
    btn.setAttribute("id", "reset");
    btn.addEventListener('click', reset);
    btn.textContent = 'Reset';
    body.appendChild(btn);

    document.documentElement.style.setProperty("--size", 20);
}

function reset() {
    const element= document.getElementsByClassName('grid');
    element[0].parentNode.removeChild(element[0]);
    var response = prompt("What size square grid would you like?", "20");
    createNew(response);
}

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
    document.documentElement.style.setProperty("--size", size);
}


start();