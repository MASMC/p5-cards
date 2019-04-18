// p5js
// 16/04/2019
// Main file for the page

// Create the board
let board = new Board();

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	board.shuffle();
}

function draw() {
	board.updateCards();
	board.show();
}