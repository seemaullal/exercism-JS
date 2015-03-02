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
	if (!this.first && !this.last) {
		return undefined; //no elements in linked list
	}
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

LinkedList.prototype.unshift = function(value) {
	if (!this.first && !this.last) {
		//empty list
		var newElement = new Element(value,null,null);
		this.first = newElement;
		this.last = newElement;
	} else {
		var newElement = new Element(value,null,this.first);
		this.first.previous = newElement;
		this.first = newElement;
	}
}

LinkedList.prototype.count = function() {
	var curr = this.first;
	var elements = 0;
	while (curr) {
		elements++;
		curr = curr.next;
	}
	return elements;
}

LinkedList.prototype.delete = function(value) {
	if (!this.first && !this.last) {
		throw ("can't delete from an empty list!");
	}
	if (this.first.data === value) { //delete first element
		this.shift();
		return;
	} if (this.last.data === value) {
		this.pop();
		return;
	} 
	var curr = this.first;
	while (curr) {
		if (curr.data === value) {
			curr.previous.next = curr.next;
			curr.next.previous = curr.previous;
			return;
		}
		curr = curr.next;
	}
}

module.exports = LinkedList;