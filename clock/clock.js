var at = function(hour,min) {
	var h = hour;
	if (h < 10) 
		h = "0" + h;
	if (min && min < 10) min = "0" + min;
	var min = min || "00";

	return h + ":" + min;
}

String.prototype.plus = function (num) {
	var time = this.split(':');
	var hours = +(time[0]);
	var min = +(time[1]);
	while (num > 60) {
		hours++;
		num -= 60;
	}
	min += num;
	while (min > 60) {
		hours++;
		min -= 60;
	}
	if (hours >= 24) {
		hours = hours-24;
	}
	return at(hours,min);
}

module.exports = { 'at': at } ;