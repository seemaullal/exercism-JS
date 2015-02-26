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
	this.sides = this.sides.sort(function(a,b) {
		return a-b;
	});
	return Math.pow(this.sides[0] , 2) + 
		   Math.pow(this.sides[1] , 2) === 
		   Math.pow(this.sides[2] , 2);
}

Triplet.where = function(criteria) {
	var triplets = [ ];
	var maxFactor = criteria.maxFactor;
	var minFactor = criteria.minFactor || 1;
	var sum = criteria.sum
	for (var a = minFactor; a <= maxFactor-1; a++) {
		for (var b = a+1; b <= maxFactor; b++) {
			for (var c = b+1 ; c <= maxFactor; c++) {
				var triplet = new Triplet(a,b,c);
				if (triplet.isPythagorean() &&  (!sum || triplet.sum() === sum)) {
					triplets.push(triplet);
				}
			}
		}
	}
	return triplets;
}

module.exports = Triplet;