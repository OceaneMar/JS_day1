function mySum(arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((acc, item) => acc + item);
  }
  
  module.exports = mySum;