var BinarySearchTree = function(value) {
  this.left;
  this.right;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(val) {
  var newBst = new BinarySearchTree(val);
  
  if (val < this.value) {
    if (!this.left) {
      this.left = newBst;
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value) {
    if (!this.right) {
      this.right = newBst;
    } else {
      this.right.insert(val);
    }   
  } else {
    console.log('value same as current tree!'); //wut
  }
};

BinarySearchTree.prototype.contains = function(val) {
  
  if (this.right) {
    if (this.right.value === val) {
      return true;
    } else {
      return this.right.contains(val);
    }
  } //if either left or right exist
  
  if (this.left) {
    if (this.left.value === val) {
      return true;
    } else {
      return this.left.contains(val);
    }
  }
  
  if (!this.right && !this.left) {
    return false;
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
