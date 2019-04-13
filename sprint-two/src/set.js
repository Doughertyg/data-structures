var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {

  add: function(item) {
    this._storage[item] = item;
  },

  contains: function(item) {
    return this._storage.hasOwnProperty(item);
  },

  remove: function(item) {
    if (this.contains(item)) {
      delete this._storage[item];
    } else {
      console.log('item not in set!'); //I haven't done this for any others but should
    }
  },
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
