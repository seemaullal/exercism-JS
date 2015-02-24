function Octal(input) {
	this.value = input;
}

Octal.prototype.toDecimal = function() {
	if (this.value * 1 != this.value) {
		//not a valid input
		return 0; 
	}
	var digits = this.value.split('').reverse();
	var decimalValue = 0;
	digits.forEach(function(value,index)  {
		decimalValue += Math.pow(8,index) * +(value);
	});
	return decimalValue;
};

module.exports = Octal;