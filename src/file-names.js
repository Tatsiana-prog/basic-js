const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  const seenNames = new Set();  // To track names we've already added

  for (let name of names) {
    // Check if the name already exists in the result array
    if (seenNames.has(name)) {
      // We need to find the smallest k such that name(k) is unique
      let counter = 1;
      let newName = `${name}(${counter})`;

      // Keep incrementing counter until we find a unique name
      while (seenNames.has(newName)) {
        counter++;
        newName = `${name}(${counter})`;
      }

      // Add the new name to the result and mark it as seen
      result.push(newName);
      seenNames.add(newName);
    } else {
      // If the name is unique, just add it to the result
      result.push(name);
      seenNames.add(name);
    }
  }

  return result;
}

module.exports = {
  renameFiles
};

