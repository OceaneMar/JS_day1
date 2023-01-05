const User = require('./28_myUserClass')

class Admin extends User {
    constructor (user, role="administrateur") {
        super(user.surname, user.name, user.age);
        this.role = role;
    }
}