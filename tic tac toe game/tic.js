//Restart Game Button)
var restart = document.querySelector('#b');
console.log(restart);
//Grabs all the Squares
var squares = document.querySelectorAll('td');

//clear all the squares
function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
}

restart.addEventListener('click', clearBoard);

//check the square marker

var cellOne = document.querySelector('#one')

cellOne.addEventListener('click', function() {
    if (cellOne.textContent === '') {
        cellOne.textContent = 'x';
    } else if (cellOne.textContent === 'x') {
        cellOne.textContent = 'o'
    } else {
        cellOne.textContent = '';
    }


})

function changeMaker() {
    if (this.textContent === '') {
        this.textContent = 'x';
    } else if (this.textContent === 'x') {
        this.textContent = 'o';
    } else {
        this.textContent = '';
    }
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMaker)
}