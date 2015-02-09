var primeFactors = {
	for : function(num) {
		if (num === 1) return [ ];
		if ( isPrime(num) ) return [num];
		var possibleFactor = 2;
	}


};


function isPrime(num) {
	for (var i = 2; i <= num/2; i++) {
		if ( num % i === 0) return false;
	}
	return true;
}

module.exports = primeFactors;