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