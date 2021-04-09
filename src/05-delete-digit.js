/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  String(n).split('').forEach((digit, index) => {
    let temp = String(n).split('');
    temp.splice(index, 1);
    temp = Number(temp.join(''));
    if (temp > max) max = temp;
  });
  return max;
}

module.exports = deleteDigit;
