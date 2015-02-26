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

Triplet.prototype.product = function() {
	var product = 1;
	this.sides.forEach(function(side) {
		product *= side;
	});
	return product;
}

Triplet.prototype.isPythagorean = function() {
	this.sides.sort();
	return Math.pow(this.sides[0] , 2) + 
		   Math.pow(this.sides[1] , 2) === 
		   Math.pow(this.sides[2] , 2);
}

module.exports = Triplet;