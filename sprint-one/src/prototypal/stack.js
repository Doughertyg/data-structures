var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.


  var someInstance = Object.create(stackMethods);

  someInstance.sizeCount = 0;  

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  //create variable for max size to account for overflow?
 
  return someInstance;
};

var stackMethods = {
	items : function() { // was not setup initially... correct?
    return this.storage;
  	},
  	size : function() {
    return this.sizeCount;
  	},
  	pop : function() {
	    if (this.sizeCount !== 0) {  //avoid underflow

	    
	      this.sizeCount--;
	      var removed = this.storage[this.sizeCount]
	      delete this.storage[this.sizeCount];
	      return removed;
	    }
    	//add conditional that throws error if size equals zero (underflow)
  	},
  	push : function(value) {
    this.storage[this.sizeCount] = value;
   	this.sizeCount++;

    //add conditional that throws error for overflow (if size is at max)
  	},
};


