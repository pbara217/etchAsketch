

// Create the Large Square containing the grid
const largeSquare = document.createElement("div");
largeSquare.className = "large-square";

//Append to the web section
const wrapper = document.querySelector(".wrapper");
wrapper.appendChild(largeSquare);

// Create a smaller square in the grid
const smallSquare = document.createElement("div");
smallSquare.className = "small-square";

// Append the small Square in hte large square
largeSquare.appendChild(smallSquare);

//Get the size of the grid
const largeSquareSize = 500;
const divide = 16;
const smallSquareSize = largeSquareSize / divide;

//Set dimension of the small squares
smallSquare.style.width = `${smallSquareSize}px`;
smallSquare.style.height = `${smallSquareSize}px`;

