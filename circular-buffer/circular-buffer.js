var circularBuffer = function (size) {
	this.size = size;
	this.arr = [ ] ;
	this.read = function () {
		if (arr.length === 0)
			throw bufferEmptyException;
		else {
			return this.arr.shift();
		}

	}; 

	this.write = function (value) {
		this.arr.push(value.toString());
	};

	this.clear = function() {
		this.arr = [ ];
	}

	return this;
};

var bufferEmptyException = function () {

};

var bufferFullException = function () {

};

module.exports = { 
	circularBuffer : circularBuffer,
	bufferFullException : bufferFullException,
	bufferEmptyException : bufferEmptyException
}