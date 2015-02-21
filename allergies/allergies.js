function Allergies (size) {
	this.size = size;
}

Allergies.prototype.list = function() {
	var allergiesLeft = this.size;
	var allergies = [ ];
	if (this.size === 0 )
		return allergies;
	while (allergiesLeft) {
		var res = getAllergies(allergiesLeft);
		allergies.push(res[0]);
		allergiesLeft = res[1];
	}
};

function getAllergies(num) {
	if (num >= 128) {
		return ['cats',num-128];
	}
	if (num >= 64) {
		return ['pollen',num-64];
	}

	if (num >= 32) {
		return ['chocolate',num-32];
	}

	if (num >= 16) {
		return ['tomatoes',num-16];
	}

	if (num >= 8) {
		return ['strawberries',num-8];
	}

	if (num >= 4) {
		return ['shellfish',num-4];
	}

	if (num >= 2) {
		return ['peanuts',num-2];
	}

	if (num >= 1) {
		return ['eggs',num-1];
	}


}
module.exports = Allergies;
