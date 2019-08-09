//mobile, agile, hostile

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (this.inStorage(index)) { //returns true or !!undefined
    var bucket = this._storage.get(index); //need to search bucket for existing tuples
    var tuple = [k, v];
    
    for (var i = 0; i < bucket.length; i++) {
      var tup = bucket[i];
      
      if (tup.indexOf(k) !== -1) {
        tup[(tup.length - 1) - tup.indexOf(k)] = v;
        return;
      }
    }
    
    bucket.push(tuple); //use .set to re assign to storage? 
  } else {
    var bucket = [];
    var tuple = [k, v];
    
    bucket.push(tuple);
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (this.inStorage(index)) {
    var buck = this._storage.get(index);
    
    for (var i = 0; i < buck.length; i++) {
      var tup = buck[i];
      
      if (tup.indexOf(k) !== -1) {
        return tup[(tup.length - 1) - tup.indexOf(k)];
      }
    }
  } else {
    console.log("doesn't exist in array!");
  }
};

HashTable.prototype.remove = function(k) { //need to remove TUPLE from bucket, not bucket
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (this.inStorage(index)) { //is this wasteful? can factor funct out
    var bucketToRemoveFrom = this._storage.get(index);
    
    for (var i = 0; i < bucketToRemoveFrom.length; i++) {
      var tup = bucketToRemoveFrom[i];
      var indexOfTup;
        
      if (tup.indexOf(k) !== -1) {
        indexOfTup = i;
        bucketToRemoveFrom.splice(i, 1);
      }
    }  
  }
};

//jk, need this again
HashTable.prototype.inStorage = function(index) {
  var inStor = false;

  var funct = function(storEle, i, storage) {
    if (i === index) {
      inStor = true;
    }
  };
  
  this._storage.each(funct);

  return inStor;
};


// remove bucket function, might be useful later
// var removeFunc = function(storEle, i, storage) {
  
//   for (var i = 0; i < storEle.length; i++) {
//     var tup = storEle[i];
    
//     if (tup.indexOf(k) !== -1) {
//       storEle[i] = storEle[i + 1];
//     }
    
//   }
//   if (i > index) {
//     storage[i - 1] = storEle; 
//   }
// }

/*
 * Complexity: What is the time complexity of the above functions?
 */


