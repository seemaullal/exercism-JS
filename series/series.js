function Series(input) {
	this.input = input;
	this.digits = this.getDigits();

}

Series.prototype.getDigits = function() {
	return this.input.split('').map(Number);
}

Series.prototype.slices = function(number) {
	var sliceArray = [ ];
	var curIndex = 0;
	while (curIndex <= this.digits.length - number) {
		sliceArray.push(this.digits.slice(curIndex,curIndex+number));
		curIndex++;
	}
	return sliceArray;
}

module.exports = Series;