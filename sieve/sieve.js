function Sieve(limit) {
	this.limit = limit;
	this.primes = calculatePrimes(this.limit);
}


function calculatePrimes(max) {
	var possiblePrimes = Array.apply(null,Array(max-1));
	possiblePrimes = possiblePrimes.map(function(el,ind) {
		return ind+2; 
	});		
	var currentPrime = possiblePrimes[0];
	var primes = [ ];
	while (possiblePrimes.length >0) {
		var curPrime = possiblePrimes.shift();
		primes.push(curPrime);
		var tmp = [ ];
		possiblePrimes.forEach( function(element,index,array) {
			if (notFactors(curPrime,element)) {
				tmp.push(element);
			}
		}); 
		//filtering Possible primes does not work for some reason
		possiblePrimes = tmp;
	} 
	return primes;
}

function notFactors(curPrime,element) {
	return element % curPrime !== 0; 
}

module.exports = Sieve;