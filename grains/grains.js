function Grains() {

}

Grains.prototype.square = function(n) {
	if (n===0 || n===1)
		return 1
	else
		return 2 * this.square(n-1);

}

Grains.prototype.total = function() {

}

module.exports = Grains;