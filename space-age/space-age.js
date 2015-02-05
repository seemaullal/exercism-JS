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

SpaceAge.prototype.onMars = function() {
	return +(this.exactEarthAge/1.8808158).toFixed(2);
}

SpaceAge.prototype.onJupiter = function() {
	return +(this.exactEarthAge/11.862615).toFixed(2);
}

SpaceAge.prototype.onSaturn = function() {
	return +(this.exactEarthAge/29.447498).toFixed(2);
}

SpaceAge.prototype.onUranus = function() {
	return +(this.exactEarthAge/84.016846 ).toFixed(2);
}

SpaceAge.prototype.onNeptune = function() {
	return +(this.exactEarthAge/164.79132).toFixed(2);
}

module.exports = SpaceAge;