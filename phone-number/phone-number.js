
function PhoneNumber(num){
	this.phoneNumber = num.replace(/[( =)-.]/g,"");
	if (this.phoneNumber.length === 11 && this.phoneNumber.charAt(0)=="1") {
		this.phoneNumber = this.phoneNumber.slice(1);
	}
	else if (this.phoneNumber.length != 10) {
		this.phoneNumber = "0000000000";
	}


}

PhoneNumber.prototype.number = function() {
	return this.phoneNumber;
}

PhoneNumber.prototype.areaCode = function() {
	return this.phoneNumber.slice(0,3);
}

PhoneNumber.prototype.toString = function() {
	return '(' + this.areaCode() + ') ' + this.number().slice(3,6) + "-" + this.number().slice(6)
}

module.exports = PhoneNumber;