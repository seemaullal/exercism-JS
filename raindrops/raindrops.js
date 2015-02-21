function Raindrops() {

}

Raindrops.prototype.convert = function(num) {
	var drops = '';
	if (num % 3 === 0) {
		drops += 'Pling';
	} 
	if (num % 5 === 0) {
		drops += 'Plang';
	}
	if (num % 7 === 0) {
		drops += 'Plong';
	}

	if ( drops === '' ) 
		return num.toString();
	return drops;

};

module.exports = Raindrops;