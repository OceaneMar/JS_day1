function myConcat ( arr1, arr2 = [] ) { 
    return [...arr1, ...arr2] ; 
  }
  
/*  function myConcat (array1, array2 = []) { 
    return array1.concat(array2);
  }
  
  function myConcat(array1, array2 = []) { 
    for (let i = 0; i < array2.length; i++) {
      array1.push(array2[i]);
    }
  }
  
  function myConcat(array1, array2 = []) {
    array2.map(i => array1.push(i));
  }*/
  
  module.exports = myConcat ;