function main (surname, name) {
    let myCreateObject = {
        surname : "Guilian",
        name: "Ganster",
        age: "25",
    
    description: function () {
        console.log(`Je m'appelle ${surname} et j'ai ${age} ans.`)
        }
    }
    return main.description;
};
    
    module.exports = main;