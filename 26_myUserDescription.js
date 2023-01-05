function main (a, b, c) {
    let myCreateObject = {
        surname : a,
        name: b,
        age: c,
        
        description: function () {
            return `Je m'appelle ${this.surname} ${this.name}, et j'ai ${this.age} ans.`;
        }
    }
    return myCreateObject.description();
};
    
    module.exports = main;