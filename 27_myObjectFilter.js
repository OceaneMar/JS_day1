function main (array) {
    let myObjectFilter = array.filter(propri => propri.age >= 18);

    return myObjectFilter.map(propri => `${propri.surname} ${propri.name}`);
};
    
module.exports = main;