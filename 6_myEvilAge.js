function main (str) {
    let n = parseInt(str);
    if (n>=18) {
        return "Majeur"
    } else {
        return "Mineur"
    };
}

module.exports = main;