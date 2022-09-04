

function createGrid(size) {
    let grid = document.querySelector('.grid')

    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => div.remove());

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for(let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = 'black';
        });
        square.style.backgroundColor = 'white';

        grid.insertAdjacentElement('beforeend', square);
    }
}

function changeSize(size) {
    if(size >= 2 && size <= 100)
    {
        createGrid(size);
    } else {
        console.log("Too many squares");
    }
    
}

createGrid(100);