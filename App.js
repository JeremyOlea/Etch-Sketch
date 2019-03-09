function createGrid() {
    var body = document.getElementsByTagName("BODY")[0];
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for(var i = 0; i < 400; i++) {
        const content = document.createElement('div');
        content.classList.add('grid-block');
        content.addEventListener('mouseover', () => {
            content.classList.add('filled');
        });
        grid.appendChild(content);
    }
    body.appendChild(grid);
}

createGrid();