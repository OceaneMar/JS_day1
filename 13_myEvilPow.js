function main (a, b) {
    if(b===0) {
        return(1);
    }
    return(main(a, b-1)*a);
}

module.exports = main;