const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [], // Internal array to store the chain of links
  
  // Method to get the length of the chain
  getLength() {
    return this.chain.length;
  },
  
  // Method to add a link to the chain with an optional value
  addLink(value) {
    // If value is undefined, it will be stored as an empty string
    this.chain.push(value === undefined ? '' : value);
    return this; // Return the chainMaker object to allow method chaining
  },
  
  // Method to remove a link from the chain at the specified position (1-based index)
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.chain.length) {
      this.chain = []; // Clear the chain if the position is invalid
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1); // Remove the link at the specified position
    return this; // Return the chainMaker object to allow method chaining
  },
  
  // Method to reverse the chain
  reverseChain() {
    this.chain.reverse(); // Reverse the array of links
    return this; // Return the chainMaker object to allow method chaining
  },
  
  // Method to finish the chain and return it as a string
  finishChain() {
    // Join all links in the chain with '~~' and return the result
    const result = this.chain.map(link => `( ${link} )`).join('~~');
    this.chain = []; // Clear the chain after finishing
    return result;
  }
};

module.exports = {
  chainMaker
};
