function Triangle(side1,side2,side3) {
	this.sides = [ ];
	for (num in arguments) {
		this.sides.push(+(arguments[num]))
	}

	this.sides.sort();
	console.log(this.sides);
}

Triangle.prototype.kind = function() {
	if (this.sides[0] === 0)
		throw "Invalid side length of 0"
	if ( this.sides[0] + this.sides[1] <= this.sides[2])
		throw "Violates triangle inequality"
	if ( this.sides[0] === this.sides[2] )
		return 'equilateral';
	if ( this.sides[0] === this.sides[1] || 
		 this.sides[1] === this.sides[2] )
		return 'isosceles';
	return 'scalene';
}

module.exports = Triangle;