function Allergies (size) {
	this.size = size;
}

Allergies.prototype.list = function() {
	var allergiesLeft = this.size;
	var allergies = [ ];
	while (allergiesLeft) {
		var res = getAllergies(allergiesLeft);
		allergies.push(res[0]);
		allergiesLeft = res[1];
	}

};

module.exports = Allergies;