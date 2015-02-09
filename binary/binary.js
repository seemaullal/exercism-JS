function Binary(num) {
	this.binary = num;
}

Binary.prototype.toDecimal = function() {
	if (this.binary * 1 != this.binary) return 0; //not a number
	var values = this.binary.split("").reverse();
	var decimalVal = 0;
	values.forEach( function(el,index) {
		if (el == 1)
			decimalVal += Math.pow(2,index);
	});
	return decimalVal;
};

module.exports = Binary;