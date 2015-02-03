var Beer = function() {

}

Beer.prototype.verse = function(num) {
	switch(num) {
		case 2:
			return "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n";	
		case 1:
			return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
		case 0:
			return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
		default:
			return num.toString() + " bottles of beer on the wall, " + num.toString() + " bottles of beer.\nTake one down and pass it around, " + (num-1).toString() + " bottles of beer on the wall.\n";
	}
};

Beer.prototype.sing = function(start,finish) {
	if (!finish) var finish = 0;
	var song = '';
	while (start >= finish) {
		song += this.verse(start);
		song += "\n";
		start--;
	}
	return song.slice(0,song.length-1);
};

module.exports = new Beer();