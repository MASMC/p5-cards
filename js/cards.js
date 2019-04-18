// p5js
// 18/04/2019
// See: Name

function Card(name, points, suit) {
	this.name = name;
	this.points = points;
	this.suit = suit;

	this.x = 0;
	this.y = 0;
	this.height = board.getCardH();
	this.width = borad.getCardW();
}