function Grains() {

}

Grains.prototype.square = function(n) {
	if (n===0 || n===1)
		return 1
	else
		return 2 * this.square(n-1);

}

Grains.prototype.total = function() {
	/*this will always give the same answer so you can hard code
	 it for efficiency OR you can also call square many times but 
	 to avoid hard coding and to make avoid many recursive calls, 
	 I used the previous "square" to compute the next */

	var prevSquare = 1;
	var res = 1;
	for (var i = 1; i < 64; i++) {
		prevSquare = prevSquare * 2;
		res += prevSquare;
	}

	return res;

}

module.exports = Grains;