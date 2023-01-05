function main (a, b, c) {
    let myCreateObject = {
        surname : a,
        name: b,
        age: c,
    
    description: function () {
        console.log(`Je m'appelle ${surname} et j'ai ${age} ans.`)
        }
    }
    return main.description;
};
    
    module.exports = main;