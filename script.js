const theGrid = document.getElementById("theGrid");

function drawCanvas(numberSquares) {
for(var i = 0; i < numberSquares; i++) {
    var newDiv = document.createElement('div');
    let newWidth = 800 / Math.sqrt(numberSquares);
    //newDiv.id = 'div' + i;
    //newDiv.innerHTML = `${i}`;
    //newDiv.style.textAlign = 'center';
    newDiv.style.backgroundColor = 'white';
    newDiv.style.width = `${newWidth}px`;
    newDiv.addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = "black";
    }, false);
    theGrid.appendChild(newDiv);
}
}

document.body.appendChild(theGrid);

const btn = document.getElementById("btn");
btn.addEventListener("click", newCanvas);

function newCanvas() {
    theGrid.textContent = '';
    let numSquares = 32;
    numSquares = prompt("How many squares would you like per side?", 32);
        if ((numSquares < 0) || (numSquares > 100)) {
            numSquares = prompt("Please choose a number from 1 to 100.", 32);
        }
        if ((numSquares < 0) || (numSquares > 100)) {
            alert("Since you can't follow instructions, default 32");
            numSquares = 32;
        }
    let actualNum = numSquares ** 2;
    drawCanvas(actualNum);
    }

drawCanvas(256);