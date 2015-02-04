function Robot() {
	this.name = generateRandomName();


}

Robot.prototype.reset = function() {
	this.name = generateRandomName();
}

function generateRandomName() {
		randomName= "";
		 var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    	for (var i=0; i < 2; i++ ) {
        	randomName += letters.charAt(Math.floor(Math.random() * letters.length));
    	}

    	var numbers = "0123456789"
    	for (var i=0; i < 3; i++ ) {
        	randomName += numbers.charAt(Math.floor(Math.random() * numbers.length));
    	}

    	return randomName;
}
module.exports = Robot;