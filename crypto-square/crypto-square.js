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

module.exports = Crypto;


