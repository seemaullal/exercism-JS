function School() {

	this._roster = { };
}

School.prototype.roster = function() {
	return this._roster;
};

School.prototype.add = function (name,grade) {
	if (!this._roster[grade]) {
		this._roster[grade] = [ name ];
	}
	else {
		this._roster[grade].push(name);
		this._roster[grade].sort();
	}
}

School.prototype.grade = function(num) {
	if (!this.roster()[num]) 
		return [ ];
	return this.roster()[num].sort();
}

module.exports = School;