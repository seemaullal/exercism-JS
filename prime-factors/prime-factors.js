var primeFactors = {
	for : function(num) {
		if (num === 1) return [ ];
		if ( isPrime(num) ) return [ num ];
		return getPrimeFactors(num);	
	}
};

function isPrime(num) {
	for (var i = 2; i <= num/2; i++) {
		if ( num % i === 0) return false;
	}
	return true;
}
function getPrimeFactors(num) {
	var result = arguments[1] || [ ];
	var x = 2; 
	var root = Math.sqrt(num);
  
	if(num % x){
		x = 3;
		while( (num % x !== 0) && ( x < root )) {
			x += 2;
   		}
  	}
	if ( x <= root ) {
		result.push( x );
		return getPrimeFactors(num/x, result);
	}
	else {
  		result.push( num );
  		return result;
	}
}

module.exports = primeFactors;