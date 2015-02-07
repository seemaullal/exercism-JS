var at = function(hour,min) {
	var h = hour;
	if (h < 10) 
		h = "0" + h;
	if (min && min < 10) min = "0" + min;
	var min = min || "00";

	return h + ":" + min;
}

String.prototype.plus = function (num) {

}

module.exports = { 'at': at } ;