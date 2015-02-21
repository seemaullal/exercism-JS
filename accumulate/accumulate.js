module.exports = function(array, accumulator) {
	return array.map(function(element) {
		return accumulator(element);
	});
};