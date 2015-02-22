function Trinary(trinaryValue) {
	this.trinaryValue = trinaryValue;
}

Trinary.prototype.toDecimal = function() {
	if (+(this.trinaryValue) != this.trinaryValue) {
	//not a valid input so return 0
		return 0; 
	}
	var trinaryPlaceValues = this.trinaryValue.split("")
							.map(function(value){
								return +value; });
	trinaryPlaceValues.reverse();						
	var decimalValue = 0;
	for (var i=0; i< trinaryPlaceValues.length; i++) {
		decimalValue += trinaryPlaceValues[i] * Math.pow(3,i);
	}
	return decimalValue;
};

module.exports = Trinary;