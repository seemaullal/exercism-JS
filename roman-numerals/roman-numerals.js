module.exports = function toRoman(num) {
	if (num > 1000) 
		return 'M' + toRoman(num-1000)
	if (num === 1000) 
		return 'M'
	if (num > 500)
		return 'D' + toRoman(num-500)
	if (num === 500)
		return 'D'
	if (num > 100)
		return 'C' + toRoman(num-100)
	if (num === 100)
		return 'C'
	if (num > 50)
		return 'L' + toRoman(num-50)
	if (num === 50)
		return 'L'
	if (num > 10)
		return 'X' + toRoman(num-10)
	if (num === 10)
		return 'X' 
	if (num > 5)
		return 'V' + toRoman(num-10);
	if (num === 5)
		return 'V'
	if (num === 4)
		return "IV"
	if (num < 5)
		return Array(num+1).join('I')
}
