module.exports = {
	encode : function(str) {
		var letters = str.match(/([a-zA-z0-9])+/g)
						 .join("").split("");
		letters = letters.map(function(letter) {
			return letter.toLowerCase();
		});
		var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
		encodedLetters = letters.map(function(val) {
			if (alphabet.indexOf(val) === -1) {
				return val;
			}
			return alphabet[alphabet.length - 1 - alphabet.indexOf(val)];
		});
		var result ='';
		encodedLetters.forEach(function(letter,index) {
			result += letter;
			if ( (index+1) % 5 === 0)  {
				result += ' ';
			}
		});
		return result.trim();
	}
};