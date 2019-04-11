var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var someInstance = {}; //declaring the object we are constructing
  // var size = 0;
  // var headIndex = 0;
  // var tailIndex = 0;

  // Use an object with numeric keys to store values
  // var storage = {};

  // Implement the methods below

  someInstance.head = 0;
  someInstance.tail = 0;
  someInstance.storage = {};
  someInstance.sizeCount = 0;


  // someInstance.head = function() {
  // 	return headIndex;
  // }

  // someInstance.tail = function() {
  // 	return tailIndex;
  // }  

  someInstance.size = function() {
    return this.sizeCount;
  };

  // someInstance.items = function() {
  //   return storage;
  // }

  _.extend(someInstance, queueMethods);
  return someInstance;
};


var queueMethods = {
	enqueue : function(value) {
    			this.storage[this.tail] = value;
    			this.tail++;
    			this.sizeCount++;
  			},
  	dequeue : function() {
			    if (this.sizeCount != 0) {
			      var removed = this.storage[this.head];
			      delete this.storage[this.head];
			      this.head++;
			      this.sizeCount--;

			      return removed;
			    }
  			}
};


