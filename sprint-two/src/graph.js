

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  
  newNode.value = node;
  newNode.edges = [];
  this.nodes[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes === {}) {
    return false;
  }
  
  // if (this.hasOwnProperty(node)) {
  //   return true;
  // } 
  //why doesn't the above code work??
  
  for (var key in this.nodes) {
    var curNode = this.nodes[key];
    
    if (curNode.value === node) {
      return true;
    }    
  }
  
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) { //what about duplicate values?
    
    var nodeToRemove = this.nodes[node]; //must delete the edges, then remove the node
    
    for (var i = 0; i < nodeToRemove.edges.length; i++) {
      var edge = nodeToRemove.edges[i];
      var connectedNode = this.nodes[edge];
      
      for (var i = 0; i < connectedNode.edges.length; i++) {
        var conNodeEdge = connectedNode.edges[i];
        
        if (conNodeEdge === node) {
          connectedNode.edges.splice(i, 1);
        }
      }      
    }
    
    delete this.nodes[node];    
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromNodeObj = this.nodes[fromNode]; //check if nodes exist in graph? either check or if this line = undefined
  var toNodeObj = this.nodes[toNode];
  
  for (var i = 0; i < fromNodeObj.edges.length; i++) {
    var curEdge = fromNodeObj.edges[i];
    
    if (curEdge === toNode) {
      return true;
    }    
  }
  
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //first check if nodes are in graph
  var fromNodeObj = this.nodes[fromNode];
  var toNodeObj = this.nodes[toNode];
  
  fromNodeObj.edges.push(toNode);
  toNodeObj.edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //first check if nodes are in graph
  var fromNodeObj = this.nodes[fromNode];
  var toNodeObj = this.nodes[toNode];
  //check if hasedge?
  
  for (var i = 0; i < fromNodeObj.edges.length; i++) {
    var currEdge = fromNodeObj.edges[i];
    
    if (currEdge === toNode) {
      fromNodeObj.edges.splice(i, 1);
    }
  }
  
  for (var i = 0; i < toNodeObj.edges.length; i++) {
    var currEdge = toNodeObj.edges[i];
    
    if (currEdge === fromNode) {
      toNodeObj.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  
  for (var key in this.nodes) { //use _.each instead?
    var valObj = this.nodes[key];
    
    cb(valObj.value);    
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


