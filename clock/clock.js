var at = function(hour,min) {
	var h = hour;
	if (h < 10) 
		h = "0" + h;
	var min = min || "00";

	return h + ":" + min;
}

String.prototype.plus = function (num) {

}

module.exports = { 'at': at } ;