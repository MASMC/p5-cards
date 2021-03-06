// p5js
// 17/04/2019
// Board for the games

function Board() {
	// Define card suits
	this.suits = ["hearts", "clubs", "diamonds", "spades"];

	// Define card value/point pairs
	this.values = [["ace", 11],
					["2", 2],
					["3", 3],
					["4", 4],
					["5", 5],
					["6", 6],
					["7", 7],
					["8", 8],
					["9", 9],
					["10", 10],
					["jack", 10],
					["queen", 10],
					["king", 10]];

	this.deck = new Deck(suits, values);

	// Board update
	this.update = function() {

	}

	// Board draw
	this.show = function() {

	}

	// Shuffle dekc associated with this board
	this.shuffle = function() {
		deck.shuffle();
	}

	this.getCardH = function() {
		return cH;
	}

	this.getCardW = function() {
		return cW;
	}
}