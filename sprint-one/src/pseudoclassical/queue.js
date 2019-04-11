var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.head = 0;
  this.tail = 0;
  this.storage = {};
  this.sizeCount = 0;
};

Queue.prototype.size = function() {
    return this.sizeCount;
}

Queue.prototype.enqueue = function(value) {
	this.storage[this.tail] = value;
	this.tail++;
	this.sizeCount++;
}

Queue.prototype.dequeue = function() {
    if (this.sizeCount != 0) {
      var removed = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      this.sizeCount--;

      return removed;
    }
}