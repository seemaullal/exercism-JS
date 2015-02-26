function Luhn(number) {
	this.number = number;
	this.checkDigit = this.number % 10; //this gives the last digit of the number
	this.addends = calculateAddends(this.number);
	this.checksum = calculateCheckSum(this.number);
	this.valid = this.checksum % 10 === 0;
}

function calculateCheckSum(number) {
	var sum = 0;
	calculateAddends(number).forEach(function(addend) {
		sum += addend;
	});
	return sum;
};

function calculateAddends(number) {
	var digits = number.toString().split('').reverse();
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

Luhn.create= function(number) {
	var luhn = number * 10;
	var checksum = calculateCheckSum(luhn);
	var digit = 10 - (checksum % 10); 
	return luhn + (digit === 10 ? 0 : digit); 

}


module.exports = Luhn;