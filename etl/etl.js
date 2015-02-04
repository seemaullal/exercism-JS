module.exports = function transform( old ) {
	var expected = { };
	for (key in old) {
		if(old.hasOwnProperty(key)) {
			var letters = old[key];
			for (var i =0; i < letters.length; i++) {
				expected[letters[i].toLowerCase()] = parseInt(key);
			}	
		}
	}
	return expected;
}