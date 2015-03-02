function Element(data,previous,next) {
	this.data = data;
	this.previous = previous;
	this.next = next;
}

function LinkedList() {
	this.first = null;
	this.last = null;
}

LinkedList.prototype.push = function(value) {
	if (!this.first && !this.last) {
		//empty list
		var newElement = new Element(value,null,null);
		this.first = newElement;
		this.last = newElement;
	} else {
		var newElement = new Element(value,this.last,null);
		this.last.next = newElement;
		this.last = newElement;
	}
}

LinkedList.prototype.pop = function() {
	if (this.first === this.last) {
		//only 1 element in list
		var pop = this.first.data;
		this.first = null;
		this. last = null;
		return pop;
	}
	var elementToRemove = this.last;
	this.last = this.last.previous;
	this.last.next = null;
	return elementToRemove.data;
}

LinkedList.prototype.shift = function() {
	if (this.first === this.last) {
		//only 1 element in list
		var shift = this.first.data;
		this.first = null;
		this. last = null;
		return shift;
	}
	var elementToRemove = this.first;
	this.first = this.first.next;
	this.first.previous = null;
	return elementToRemove.data;
}

module.exports = LinkedList;