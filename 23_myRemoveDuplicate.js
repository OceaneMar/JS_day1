function myRemoveDuplicate(arr) {
    arr = [...new Set(arr)];
    return arr;
  }
  
  module.exports = myRemoveDuplicate;