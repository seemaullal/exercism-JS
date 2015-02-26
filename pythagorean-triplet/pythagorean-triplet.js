function Triplet( side1 , side2 , side3 ) {
	this.sides = [ side1 , side2 , side3 ];
}

Triplet.prototype.sum = function() {
	var sum = 0;
	this.sides.forEach(function(side) {
		sum += side;
	});
	return sum;
}

module.exports = Triplet;