function DNA(strand) {

	this.strand = strand || "";

	this.count = function(char) {
		var num = 0;
		for (var i=0; i< this.strand.length; i++) {
			if (this.strand.charAt(i) === char)
				num++;
		}
	return num;

	};

	this.histogram = function() {

	};

	return this;
}

module.exports = DNA;