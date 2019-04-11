var Queue = function() {
  var someInstance = {};
  var size = 0;
  var headIndex = 0;
  var tailIndex = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[tailIndex] = value;
    tailIndex++;
    size++;
  };

  someInstance.dequeue = function() {
    if (size != 0) {
      var removed = storage[headIndex];
      delete storage[headIndex];
      headIndex++;
      size--;

      return removed;
    }
  };

  someInstance.size = function() {
    return size;
  };

  someInstance.items = function() {
    return storage;
  }

  return someInstance;
};
