class User {
    constructor(surname, name, age) {
        this.surname = surname;
        this.name = name;
        this.age = age;
    }

    presentation() {
        return `Je m'appelle ${this.surname} ${this.name}, j'ai ${this.age} ans`;
    }
}

/*function user (surname, name, age) { 
    let me = new User (surname, name, age);
    return me;
}*/

class Admin extends User {
    constructor (user, role="administrateur") {
        super(user.surname, user.name, user.age, user.presentation());
        this.role = role;
    }
}

let user = new User("Guilian", "Ganster", 22);
let me = new Admin(user,);

console.log(me.presentation());
console.log(me.role);

module.exports = Admin;