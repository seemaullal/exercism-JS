module.exports = function(sequence) {

	var nucleotides = sequence.split("");
	var RNAseq = nucleotides.map(function(base) {
		switch (base) {
			case 'A': return 'U';
			case 'T': return 'A';
			case 'C': return 'G';
			case 'G': return 'C';
		}
	});
	return RNAseq.join("");
}

