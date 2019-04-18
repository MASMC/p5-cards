// p5js
// 17/04/2019
// Deck class

function Deck(suits, values) {
	this.cards = [];

	suits.forEach(suit => {
		values.forEach(val => {
			cards.push(new Card(val[0], val[1], suit));
		});
	});

	this.shuffle = function() {
		let shuffles = (cards.length * 7) / (PI * PI)

		for (let i = 0; i < shuffles; i++) {
			let rand1 = random(cards.length);
			let rand2 = random(cards.length);

			let card1 = cards[rand1];
			cards[rand1] = cards[rand2];
			cards[rand2] = card1;
		}

		console.log(`Deck shuffled ${int(shuffles)} times!`);
	}
}