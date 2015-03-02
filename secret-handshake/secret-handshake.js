function SecretHandshake(number) {
	if (+(number) !== number) 
		throw('Handshake must be a number');
	this.number = number;
	this.binary = convertToBinary(this.number);
}

SecretHandshake.prototype.commands = function() {
	var binary = +(this.binary);
	var commandArray = [ ];
	var reverse = false;
	while (binary) {
		if (binary >= 10000) {
			reverse = true;
			binary -= 10000;
		} else if (binary >= 1000) {
			commandArray.unshift('jump');
			binary -= 1000;
		} else if (binary >= 100) {
			commandArray.unshift('close your eyes');
			binary -= 100;
		} else if (binary >= 10) {
			commandArray.unshift('double blink');
			binary -= 10;
		} else if (binary >= 1) {
			commandArray.unshift('wink');
			binary -= 1;
		}
	}
	if (reverse) commandArray.reverse();
	return commandArray;
}

function convertToBinary(decimalNum) {
	var num = decimalNum, binaryDigits = [];
	while (num) {
		var bit = num % 2;
		num = Math.floor(num / 2);
		binaryDigits.unshift(bit)
	}
	return binaryDigits.join('');
}

module.exports = SecretHandshake;

