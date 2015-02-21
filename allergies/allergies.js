function Allergies (size) {
	this.size = size;
	this.allergies = this.list(this.size);
}

Allergies.prototype.list = function() {
	var allergiesLeft = this.size;
	var allergies = [ ];
	while (allergiesLeft) {
		var res = getAllergies(allergiesLeft);
		allergies.push(res[0]);
		allergiesLeft = res[1];
	}
	allergies.sort(function(el1,el2) {
		//sort from lowest allergy score to highest
		return el1.num-el2.num; 
	});

	allergies = allergies.map (function(obj) {
		//only want the actual allergies in the result
		return obj.value;
	});

	return allergies.filter (function(element, index) {
		//only want unique allergens
		//this only returns true if the element is the 1st
		//element with its value
		return allergies.indexOf(element) === index;
	});
	
};

Allergies.prototype.allergicTo = function (allergen) {
	return this.allergies.indexOf(allergen) > -1;
};

function getAllergies(num) { //helper function for list()
	if (num >= 128) {
		return [{value: 'cats', num : 128},num-128];
	}
	if (num >= 64) {
		return [{value: 'pollen', num : 64} , num-64];
	}

	if (num >= 32) {
		return [{value: 'chocolate', num : 32},num-32];
	}

	if (num >= 16) {
		return [{value: 'tomatoes', num : 16},num-16];
	}

	if (num >= 8) {
		return [{value: 'strawberries', num : 8},num-8];
	}

	if (num >= 4) {
		return [{value: 'shellfish', num : 4 },num-4];
	}

	if (num >= 2) {
		return [{value: 'peanuts', num : 2 },num-2];
	}

	if (num >= 1) {
		return [{value: 'eggs', num : 1 },num-1];
	}


}
module.exports = Allergies;
