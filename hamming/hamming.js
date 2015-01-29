function compute(strand1,strand2) {
	if (strand1.length !== strand2.length)
		throw("DNA strands must be of equal length.");
	diff = 0;
	for (var i=0; i< strand1.length; i++) {
		if(strand1.charAt(i) !== strand2.charAt(i))
			diff++;
	}
	return diff;
}