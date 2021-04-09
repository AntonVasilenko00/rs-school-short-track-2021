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
  const newFiles = [];
  const fileNames = {};
  names.forEach((name) => {
    if (name in fileNames) {
      newFiles.push(`${name}(${fileNames[name]++})`);
    } else {
      fileNames[name] = 1;
      let pushName = name;
      if (/.+\(\d+\)$/g.test(name)) { // if initial name ends with ()
        const nameWithoutBrackets = name.slice(0, name.length - 3);
        const times = Number(name.slice(name.length - 2, name.length - 1));
        const newName = `${name}(${fileNames[nameWithoutBrackets] - 1})`;
        pushName = fileNames[nameWithoutBrackets] - 1 === times ? newName : name;
      }
      newFiles.push(pushName);
    }
  });
  return newFiles;
}

module.exports = renameFiles;
