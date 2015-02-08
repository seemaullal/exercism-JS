module.exports = function toRoman(num) {
	var numToRoman = {
	1 : 'I', 2 : "II", 3 : 'III', 4 : 'IV',
	5 : 'V', 6 : 'VI', 7 : 'VII', 8 : 'VIII',
	9 : 'IX', 10 : 'X', 20 : 'XX', 30 : 'XXX',
	40 : 'XL', 50 : 'L', 60 : 'LX', 70 : 'LXX',
	80 : 'LXXX', 90 : 'XC', 100 : 'C', 200: 'CC',
	300 : 'CCC', 400 : 'CD', 500 : 'D', 600: 'DC',
	700 : 'DCC', 800 : 'DCCC', 900 : 'CM', 1000 : 'M',
	2000 : 'MM', 3000: "MMM"
	};

	var digits = num.toString().split("");
	var romanNumeral = "";
	if (digits.length === 4) {
		romanNumeral += numToRoman[digits[0]*1000];
		romanNumeral += numToRoman[digits[1]*100];
		romanNumeral += numToRoman[digits[2]*10];
		romanNumeral += numToRoman[digits[3]*1];
		return romanNumeral;
	}

	if (digits.length === 3) {
		romanNumeral += numToRoman[digits[0]*100];
		romanNumeral += numToRoman[digits[1]*10];
		romanNumeral += numToRoman[digits[2]*1];
		return romanNumeral;
	}

	if (digits.length === 2) {
		romanNumeral += numToRoman[digits[0]*10];
		romanNumeral += numToRoman[digits[1]*1];
		return romanNumeral;
	}

	if (digits.length === 1) {
		romanNumeral += numToRoman[digits[0]*1];
		return romanNumeral;
	}
}
