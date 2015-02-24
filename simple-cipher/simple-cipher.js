var letters = 'abcdefghijklmnopqrstuvwxyz';

function Cipher(key) {
	this.key = key || generateRandomKey();
}

Cipher.prototype.encode = function(text) {
	var characters = text.split('');
	var encodedChars = [ ];
	var self = this;
	characters.forEach(function(character,index) {
		var newIndex = letters.indexOf(character) + 
					   letters.indexOf(self.key[index]);
		if (newIndex >= letters.length) {
			newIndex -= letters.length;
		}
		console.log(letters[newIndex]);
		encodedChars.push(letters[newIndex]);
	});
	return encodedChars.join('');
};

function generateRandomKey() {
	var i,
		randomKey = '';
	for (i = 0; i < 100; i++) {
		randIndex = Math.floor(Math.random() * letters.length);
		randomKey += letters[randIndex];
	}
	return randomKey;
}

module.exports = Cipher;
