function Octal(input) {
	this.value = input;
}

Octal.prototype.toDecimal = function() {
	var digits = this.value.split('').reverse();
	var decimalValue = 0;
	digits.forEach(function(value,index)  {
		decimalValue += Math.pow(8,index) * +(value);
	});
	return decimalValue;
};

module.exports = Octal;