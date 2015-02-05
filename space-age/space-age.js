function SpaceAge (sec) {
	this.seconds = sec;
	this.exactEarthAge = this.seconds/31557600;
}

SpaceAge.prototype.onEarth = function() {
	return +(this.seconds/31557600).toFixed(2);
}

SpaceAge.prototype.onMercury = function() {
	return +(this.exactEarthAge/0.2408467).toFixed(2);
}

SpaceAge.prototype.onVenus = function() {
	return +(this.exactEarthAge/0.61519726).toFixed(2);
}

module.exports = SpaceAge;