//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
	if (/^\s*$/.test(input)) return "Fine. Be that way!";
	// if (input ==="") return "Fine. Be that way!";
	if (isYelling(input)) 
		return "Whoa, chill out!";
	if (isQuestion(input)) return "Sure.";
	else return "Whatever."
}

function isYelling(input) {
	//first part checks if only capital letters
	//2nd part checks if not all numbers
    return (input.toUpperCase() === input) && (input.toLowerCase() !== input );
}

function isQuestion(input) {
	return input.charAt(input.length-1) === "?";
}

//module.exports = Bob;
