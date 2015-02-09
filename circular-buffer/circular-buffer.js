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
		if (value && value !='undefined') {
			if (this.arr.length === this.size)
				throw bufferFullException;
			this.arr.push(value.toString());
		}
	};

	this.clear = function() {
		this.arr = [ ];
	};

	this.forceWrite = function (value) {
		if (value && typeof value !=='undefined') {
			if (this.arr.length === this.size) 
				//remove oldest element if buffer full
				this.arr.splice(0,1); 
			this.arr.push(value.toString());
		}
	};

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