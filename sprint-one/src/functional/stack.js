var Stack = function() {
  var someInstance = {};

  var size = 0;  

  // Use an object with numeric keys to store values
  var storage = {};

  //create variable for max size to account for overflow?

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;

    //add conditional that throws error for overflow (if size is at max)
  };

  someInstance.pop = function() {
    if (size !== 0) {  //avoid underflow

    
      size--;
      var removed = storage[size]
      delete storage[size];
      return removed;
    }

    //add conditional that throws error if size equals zero (underflow)
  };

  someInstance.size = function() {
    return size;
  };

  someInstance.items = function() { // was not setup initially... correct?
    return storage;
  }

  return someInstance;
};
