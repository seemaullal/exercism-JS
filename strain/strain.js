var strain = {
	keep : function (arr, func) {
		return arr.filter(func);
	},

	discard : function (arr, func) {
		return arr.filter( function(element) {
			return !func(element);
		});
	}
};

module.exports = strain;