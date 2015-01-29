function words(str) {
	wordArray = str.split(/ |\n/);
	results = { };
	wordArray.forEach( function(word) {
		if (!results.hasOwnProperty(word) )
			results[word] = 1;
		else
			results[word]++;
	});
	return results;
}