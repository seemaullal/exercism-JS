function Series(input) {
	this.input = input;
	this.digits = this.getDigits();

}

Series.prototype.getDigits = function() {
	return this.input.split('').map(Number);
}

module.exports = Series;