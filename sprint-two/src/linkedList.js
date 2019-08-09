var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (this.tail === null) {
      this.tail = newNode;
      this.head = newNode;
    }
    else {
      var oldNode = this.tail;
      oldNode.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (this.head === null) {//if no head exists, throw error
      alert('nothing in list!');
      return;
    } 

    var oldHead = this.head;
    var newHead = oldHead.next;
    this.head = newHead;

    return oldHead.value;
  };

  list.contains = function(target) {

    var recursiveFind = function(nodeObj) {
      if (nodeObj.value === target) {
        return true;
      }
      else if (nodeObj.next) {
        return recursiveFind(nodeObj.next);
      }
      else {
        return false;
      }
    }

    return recursiveFind(this.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
