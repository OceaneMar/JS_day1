function main (str) {
    let n = parseInt(str);
    if(n>0) {
        return "+"
    } else if (n<0) {
        return "-"
    } else {
        return "0"
    };
}

module.exports = main;