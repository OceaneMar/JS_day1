function main (arg) { 
    if (arg === "") return [];
    return arg.split(" ").sort();
};



module.exports = main;