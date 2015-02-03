function DNA(strand) {

	this.strand = strand || "";

	if (/[^ATCG]/.test(this.strand)) {
    	throw "Invalid DNA";
  	}

	this.count = function(char) {
		var num = 0;
		for (var i=0; i< this.strand.length; i++) {
			if (this.strand.charAt(i) === char)
				num++;
		}
	return num;

	};

	this.histogram = function() {
		return {
			'A' : this.count('A'),
			'C' : this.count('C'),
			'G' : this.count('G'),
			'T' : this.count('T')
		 }

	};

	return this;
}

module.exports = DNA;