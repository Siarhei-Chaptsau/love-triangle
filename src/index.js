/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
*/
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count  = 0;
  preferences.forEach(function(item, i, arr) {
    var first = arr[i] - 1;
    var second = arr[first] - 1;
    var third = arr[second] - 1;

    if (third === i && first !== i && second !== i) {
      count += 1;
      arr[i] = -1;
    }
  });
  return count;
};
