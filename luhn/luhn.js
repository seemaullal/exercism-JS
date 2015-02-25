function Luhn(number) {
	this.number = number;
	this.checkDigit = this.number % 10; //this gives the last digit of the number
	this.checksum = this.calculateCheckSum(this.number);
}

Luhn.prototype.calculateCheckSum= function(num) {
	var digits = num.toString().split('').reverse();
	var sum = 0;
	digits.forEach(function (digit,index,arr) {
		if (index % 2 === 1) {
			var newDigit = +(digit) * 2;
			if (newDigit >= 10) newDigit -= 9;
			sum += newDigit;
		}
		else {
			sum += +(arr[index]);
		}
	});
	return sum;
};

module.exports = Luhn;