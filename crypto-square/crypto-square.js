function Crypto(text) {
	this.text = text;
}

Crypto.prototype.normalizePlaintext = function() {
	return this.text.replace(/\W/g,'').toLowerCase();
};

Crypto.prototype.size = function() {
	for (var i = 1, len=this.text.length ; i < len ; i++) {
		if (i*i === this.text.length) return i;
		if (i*i > this.text.length) return i;
	}
};
module.exports = Crypto;


