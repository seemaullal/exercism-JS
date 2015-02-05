function SpaceAge (sec) {
	this.seconds = sec;
}

SpaceAge.prototype.onEarth = function() {
	return +(this.seconds/31557600).toFixed(2);
}

module.exports = SpaceAge;