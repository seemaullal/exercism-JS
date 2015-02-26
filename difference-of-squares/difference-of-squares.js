function Squares(number) {
	this.size = number;
	this.squareOfSums = this.calculateSquareofSums();
	this.sumOfSquares = this.calculateSumOfSquares();
	this.difference = this.squareOfSums - this.sumOfSquares;
}

Squares.prototype.calculateSquareofSums = function() {
	var sum = 0;
	for (var i = 1 ; i <= this.size ; i++) {
		sum += i;
	}
	return sum*sum;
};

Squares.prototype.calculateSumOfSquares = function() {
	var sum = 0
	for (var i = 1 ; i <= this.size ; i++) {
		sum += ( i * i );
	}
	return sum;
};


module.exports = Squares;