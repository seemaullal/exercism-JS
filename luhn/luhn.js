function Luhn(number) {
	this.number = number;
	this.checkDigit = this.number % 10; //this gives the last digit of the number
	this.addends = this.calculateAddends();
	this.checksum = this.calculateCheckSum();
	this.valid = this.checksum % 10 === 0;
}

Luhn.prototype.calculateCheckSum= function() {
	var sum = 0;
	this.addends.forEach(function(addend) {
		sum += addend;
	});
	return sum;
};

Luhn.prototype.calculateAddends =  function() {
	var digits = this.number.toString().split('').reverse();
	digits.forEach(function (digit,index,arr) {
		if (index % 2 === 1) {
			var newDigit = +(digit) * 2;
			if (newDigit >= 10) newDigit -= 9;
			arr[index] = newDigit;
		}
		else {
			arr[index] =  +(arr[index]); //convert to integer
		}
	//put back in original ordee
	});
	return digits.reverse();
};

module.exports = Luhn;