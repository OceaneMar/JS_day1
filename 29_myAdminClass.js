const User = require("./28_myUserClass");

class Admin extends User {
    constructor (surname, name, age) {
        super(surname, name, age);
        this.role = "administrateur";
    }
}

/*let user = new User("Guilian", "Ganster", 22);
let me = new Admin(user,);

console.log(me.presentation());
console.log(me.role);*/

module.exports = Admin;