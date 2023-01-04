function main (myArray) { 
    if (myArray.length===0) return [];
    myArray.pop();
    return myArray; 
};

module.exports = main;