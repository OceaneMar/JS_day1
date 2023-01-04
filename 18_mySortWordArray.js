function main (string) { 
    let myArray = string.split(' ');
    myArray.sort();
    return myArray; 
};

module.exports = main;