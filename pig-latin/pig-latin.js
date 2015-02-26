module.exports = {
	translate : function(stringToTranslate) {
		var words = stringToTranslate.split(' ');
		var translated = words.map(this.getpigLatin);
		return translated.join(' ');
	},

	getpigLatin : function(word) {
		vowels = ['a','e','i','o','u'];
		//check if the first letter of the string is a vowel
		if (vowels.indexOf(word.charAt(0)) > -1)
			return word + 'ay'
		if (word.search('qu') > -1) {
			//contains 'qu' which is counted as a unit
			return word.substring(word.search('qu')+2,word.length) +
				   word.substring(0,word.search('qu')+2) + 'ay';
		}
		else {
			var index = 0;
			var startingCons = '';
			while (vowels.indexOf(word.charAt(index)) === -1) {
				startingCons += word[index];
				index++;
			}
			return  word.substring(index) + startingCons + 'ay';
		}

	}
		
}