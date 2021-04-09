/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let encodedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] !== str[i]) encodedStr += str[i];
    else {
      for (let j = i + 1; j < str.length; j++, i++) {
        if (str[j] === str[i]) count++;
        else break;
      }
      encodedStr += `${count}${str[i]}`;
      count = 1;
    }
  }
  return encodedStr;
}

module.exports = encodeLine;
