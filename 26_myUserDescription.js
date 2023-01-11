function main (obj) {
    let {surname, name, age} = obj;
    return `Je m'apelle ${surname} ${name}, j'ai ${age} ans`;
    };

module.exports = main;