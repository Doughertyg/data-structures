var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {

	addChild : function(value) {
		var createTree = Tree(value);
		this.children.push(createTree);
	},

	contains : function(target) {
		if(this.value === target) {
			return true;
		}
		else if (this.children !== []) {
			for (var i = 0; i < this.children.length; i++) {
				var current = this.children[i];

				if (current.contains(target) === true) {
					return true;
				}
			}

			return false;
		}
		else {
			return false;
		}

	}
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
