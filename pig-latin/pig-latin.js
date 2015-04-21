module.exports = {
	getPigLatin : function(word) {
		var vowels = ['a','e','i','o','u'];
		if (vowels.indexOf(word[0]) > -1) 
			return word + 'ay';
		var letters = word.split('');
		var addToEnd = '';
		while (vowels.indexOf(letters[0]) ===-1) {
			if (letters[0]==='q' && letters[1] ==='u')
				addToEnd += letters.shift() + letters.shift();
			else 
				addToEnd += letters.shift();
		}
		return letters.join('') + addToEnd + 'ay';
	},
	translate : function(englishText) {
		return englishText.split(' ').map(this.getPigLatin).join(' ');
	}

};