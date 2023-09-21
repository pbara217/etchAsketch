

// Create the Large Square containing the grid
const largeSquare = document.createElement("div");
largeSquare.className = "large-square";

//Append to the web section
const wrapper = document.querySelector(".wrapper");
wrapper.appendChild(largeSquare);



//Get the size of the grid
const largeSquaredim = 500;
let divide = 16;
const smallSquareSize = largeSquaredim / divide;
const largeSquareSize = largeSquaredim + (2*divide);

//Size large grid
largeSquare.style.width = `${largeSquareSize}px`;
largeSquare.style.height = `${largeSquareSize}px`;



// Create the X*X amount of sqaures

for(let i = 0; i < (divide * divide); i++) {
    const smallSquare = document.createElement("div");
smallSquare.className = "small-square";
smallSquare.style.width = `${smallSquareSize}px`;
smallSquare.style.height = `${smallSquareSize}px`;
largeSquare.appendChild(smallSquare);

// Add the hoverover event
smallSquare.onmouseover = function(){
    this.style.backgroundColor = "black";
};
}

// Change over in the size
const sizebutton = document.getElementById("sizePrompt");
sizebutton.addEventListener("click", function (){
    let input = prompt("Please enter the amount of squares");
    const numInput = parseInt(input);

//Clear our the large square
const largeSquare = document.querySelector(".large-square");
largeSquare.innerHTML = "";

//Recalculate size

const largeSquaredim = 500;
let divide = input;
const smallSquareSize = largeSquaredim / divide;
const largeSquareSize = largeSquaredim + (2*divide);

//Size large grid
largeSquare.style.width = `${largeSquareSize}px`;
largeSquare.style.height = `${largeSquareSize}px`;



// Create the X*X amount of sqaures

for(let i = 0; i < (divide * divide); i++) {
    const smallSquare = document.createElement("div");
smallSquare.className = "small-square";
smallSquare.style.width = `${smallSquareSize}px`;
smallSquare.style.height = `${smallSquareSize}px`;
largeSquare.appendChild(smallSquare);

// Add the hoverover event
smallSquare.onmouseover = function(){
    this.style.backgroundColor = "black";
};}});



