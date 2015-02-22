function Crypto(text) {
	this.text = text;
	this.cols = this.size();
}

Crypto.prototype.normalizePlaintext = function() {
	return this.text.replace(/\W/g,'').toLowerCase();
};

Crypto.prototype.size = function() {
	var text = this.normalizePlaintext(this.text);
	for (var i = 1, len = text.length ; i < len ; i++) {
		if (i*i === text.length) return i;
		if (i*i > text.length) return i;
	}
};

Crypto.prototype.plaintextSegments = function() {
	var segments = '';
	var text = this.normalizePlaintext(this.text);
	for (var i = 0; i < text.length; i++) {
		segments += text.charAt(i);
		if ((i+1) % this.cols === 0 && i !== text.length-1) segments += ' ';
	}
	return segments.split(" ");
};

Crypto.prototype.ciphertext = function() {
	var segments = this.plaintextSegments();
	var columns = [ ];
	var currSegment, currLetter;
	for (var i=0; i<this.size(); i++) {
		columns.push([]);
	}
	for (var j = 0; j < segments.length; j++) {
		currSegment = segments[j];
		for ( var k = 0; k < currSegment.length; k++) {
			currLetter = currSegment[k];
			columns[k].push(currLetter);
		}
	}
	for (var m = 0; m < columns.length ; m++) {
		columns[m] = columns[m].join('');
	}

	columns = columns.join('');
	return columns;
};

Crypto.prototype.normalizeCiphertext = function() {
	var normalized = '';
	var cipher = this.ciphertext();
	for (var i = 0; i < cipher.length; i++) {
		normalized += cipher.charAt(i);
		if ((i + 1) % this.cols === 0)
			normalized += ' ';
	}
	return normalized.trim();
};

module.exports = Crypto;


