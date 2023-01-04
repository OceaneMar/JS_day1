function main ([arg1, arg2]) { 
    let myArray = [arg1, arg2];
    myArray.pop();
    return myArray; 
};

module.exports = main;